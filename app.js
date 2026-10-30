(function(){
  var S = window.SITE, main = document.getElementById('main') || document.getElementById('contenu');
  var TYPES = {
    cours:{l:'Cours',a:'Ouvrir'}, activite:{l:'Activité',a:'Ouvrir'},
    exercice:{l:'Exercices',a:'Ouvrir'}, video:{l:'Vidéo',a:'Regarder'},
    simulation:{l:'Simulation',a:'Lancer'}
  };
  var filtre = 'tous';

  function h(tag, attrs, kids){
    var e = document.createElement(tag);
    for (var k in (attrs||{})) {
      if (k === 'text') e.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    }
    (kids||[]).forEach(function(c){ if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function count(n){ return n.chapitres.reduce(function(t,c){return t + c.ressources.length;},0); }
  function plur(n){ return n + (n > 1 ? ' ressources' : ' ressource'); }
  function label(n){ return n.court || n.titre; }

  document.getElementById('foot-nom').textContent = '© 2026 ' + S.nom + ', ' + S.titre.toLowerCase();

  function renderNav(cur){
    var nav = document.getElementById('nav'); nav.textContent = '';
    S.niveaux.forEach(function(n){
      var a = h('a', {href:'#'+n.id, text:label(n), style:'--c:'+n.couleur});
      if (n.id === cur) a.setAttribute('aria-current','page');
      nav.appendChild(a);
    });
    nav.classList.remove('ouvert');
    document.getElementById('menu').setAttribute('aria-expanded','false');
  }
  document.getElementById('menu').addEventListener('click', function(){
    var o = document.getElementById('nav').classList.toggle('ouvert');
    this.setAttribute('aria-expanded', String(o));
  });

  function resItem(r, niveauNom){
    var t = TYPES[r.type] || {l:r.type, a:'Ouvrir'};
    var href = r.fichier || r.url;
    var meta = [];
    if (niveauNom) meta.push(niveauNom);
    if (r.desc) meta.push(r.desc);
    var info = h('span',{},[h('b',{text:r.titre}), meta.length ? h('small',{text:meta.join(' · ')}) : null]);
    var a = h('a',{class:'r',href:href||'#',target:'_blank',rel:'noopener'},[
      h('span',{class:'t',text:t.l}), info, h('span',{class:'go',text:t.a + ' ↗'})
    ]);
    return h('li',{},[a]);
  }

  function accueil(){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('section',{class:'intro'},[
      h('h1',{text:S.nom}),
      h('p',{text:S.titre})
    ]));
    frag.appendChild(h('img',{class:'bandeau',src:'hero.jpg',alt:'',width:'601',height:'332'}));

    var ul = h('ul',{class:'liste'});
    S.niveaux.forEach(function(n){
      var c = count(n);
      ul.appendChild(h('li',{},[h('a',{class:'niv',href:'#'+n.id,style:'--c:'+n.couleur},[
        h('span',{class:'dot'}),
        h('span',{},[h('h2',{text:n.titre}), h('span',{class:'s',text:n.sous})]),
        h('span',{class:'k',text:c ? plur(c) : 'à venir'})
      ])]));
    });
    frag.appendChild(ul);

    var tous = [];
    S.niveaux.forEach(function(n){ n.chapitres.forEach(function(ch){ ch.ressources.forEach(function(r){ tous.push({r:r,n:n}); }); }); });
    if (tous.length){
      tous.sort(function(a,b){ return (b.r.date||'').localeCompare(a.r.date||''); });
      var rec = h('ul',{class:'res'});
      tous.slice(0,5).forEach(function(x){ rec.appendChild(resItem(x.r, label(x.n))); });
      frag.appendChild(h('section',{class:'bloc'},[h('h2',{text:'Derniers ajouts'}), rec]));
    }

    var p = h('p',{class:'liens'},[document.createTextNode('Liens utiles : ')]);
    S.liens.forEach(function(l,i){
      if (i) p.appendChild(document.createTextNode(' · '));
      p.appendChild(h('a',{href:l.url,target:'_blank',rel:'noopener',text:l.titre.split(' : ')[0],title:l.desc}));
    });
    frag.appendChild(p);
    return frag;
  }

  function niveau(n){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('a',{class:'back',href:'#accueil',text:'← Accueil'}));
    frag.appendChild(h('div',{class:'n-head',style:'--c:'+n.couleur},[
      h('h1',{},[h('span',{class:'dot'}), n.titre]),
      h('p',{text:n.sous})
    ]));
    var liste = h('div',{});
    var total = count(n);
    if (total){
      var bar = h('div',{class:'filtres',role:'group','aria-label':'Filtrer par type'});
      var types = ['tous'].concat(Object.keys(TYPES).filter(function(k){
        return n.chapitres.some(function(c){ return c.ressources.some(function(r){ return r.type===k; }); });
      }));
      types.forEach(function(k){
        var b = h('button',{type:'button',text:k==='tous'?'Tout':TYPES[k].l,'aria-pressed':String(filtre===k)});
        b.addEventListener('click',function(){
          filtre = k;
          Array.prototype.forEach.call(bar.children,function(x){ x.setAttribute('aria-pressed','false'); });
          b.setAttribute('aria-pressed','true');
          draw();
        });
        bar.appendChild(b);
      });
      frag.appendChild(bar);
    }
    function draw(){
      liste.textContent = '';
      n.chapitres.forEach(function(ch){
        var rs = ch.ressources.filter(function(r){ return filtre==='tous' || r.type===filtre; });
        if (!ch.ressources.length){
          liste.appendChild(h('div',{class:'chap'},[h('div',{class:'cap'},[h('span',{text:ch.titre}), h('span',{class:'mono',text:'à venir'})])]));
          return;
        }
        if (!rs.length) return;
        var ul = h('ul',{class:'res'});
        rs.forEach(function(r){ ul.appendChild(resItem(r)); });
        var d = h('details',{class:'chap',open:''},[
          h('summary',{},[h('span',{text:ch.titre}), h('span',{class:'mono',text:plur(rs.length)})]), ul
        ]);
        liste.appendChild(d);
      });
    }
    draw();
    frag.appendChild(h('div',{style:'margin-top:'+(total?'8px':'32px')},[liste]));
    return frag;
  }

  function route(){
    var id = location.hash.replace('#','') || 'accueil';
    var n = S.niveaux.filter(function(x){return x.id===id;})[0];
    main.textContent = '';
    renderNav(n ? n.id : '');
    if (n){ filtre='tous'; main.appendChild(niveau(n)); document.title = n.titre + ' · Physique-Chimie, M. Oustou'; }
    else { main.appendChild(accueil()); document.title = 'Physique-Chimie, M. Oustou'; }
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
