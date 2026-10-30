(function(){
  var S = window.SITE, main = document.getElementById('main') || document.getElementById('contenu');
  var TYPES = {
    cours:{l:'Cours',a:'Ouvrir le PDF'}, activite:{l:'Activité',a:'Ouvrir le PDF'},
    exercice:{l:'Exercices',a:'Ouvrir le PDF'}, video:{l:'Vidéo',a:'Regarder'},
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
  }

  function resItem(r, niveauNom){
    var t = TYPES[r.type] || {l:r.type, a:'Ouvrir'};
    var href = r.fichier || r.url;
    var info = [h('b',{text:r.titre})];
    var meta = [];
    if (niveauNom) meta.push(niveauNom);
    if (r.desc) meta.push(r.desc);
    if (meta.length) info.push(h('small',{text:meta.join(' · ')}));
    return h('li',{class:'r'},[
      h('span',{class:'tag',text:t.l}),
      h('div',{},info),
      href ? h('a',{class:'btn',href:href,target:'_blank',rel:'noopener',text:t.a}) : null
    ]);
  }

  function accueil(){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('section',{class:'hero'},[
      h('span',{class:'mono',text:'Lycée · Physique-Chimie'}),
      h('h1',{text:S.nom}),
      h('div',{class:'titre',text:S.titre})
    ]));

    var ul = h('ul',{class:'niveaux'});
    S.niveaux.forEach(function(n,i){
      var c = count(n);
      ul.appendChild(h('li',{},[h('a',{class:'niv',href:'#'+n.id,style:'--c:'+n.couleur},[
        h('h3',{text:n.titre}),
        h('span',{class:'s',text:n.sous}),
        h('span',{class:'k',text:c ? plur(c) : 'à venir'})
      ])]));
    });
    frag.appendChild(h('section',{class:'sect'},[h('h2',{text:'Choisir un niveau'}), ul]));

    var tous = [];
    S.niveaux.forEach(function(n){ n.chapitres.forEach(function(ch){ ch.ressources.forEach(function(r){ tous.push({r:r,n:n}); }); }); });
    tous.sort(function(a,b){ return (b.r.date||'').localeCompare(a.r.date||''); });
    var rec = h('ul',{class:'res rec'});
    tous.slice(0,6).forEach(function(x){ rec.appendChild(resItem(x.r, label(x.n))); });
    frag.appendChild(h('section',{class:'sect'},[
      h('h2',{text:'Derniers ajouts'}),
      tous.length ? rec : h('p',{class:'vide',text:'Les premières ressources arrivent bientôt. Revenez voir après les prochains cours.'})
    ]));

    var lg = h('div',{class:'liens'});
    S.liens.forEach(function(l){
      lg.appendChild(h('a',{class:'lien',href:l.url,target:'_blank',rel:'noopener'},[h('b',{text:l.titre}),h('span',{text:l.desc})]));
    });
    frag.appendChild(h('section',{class:'sect'},[h('h2',{text:'Liens utiles'}), lg]));
    return frag;
  }

  function niveau(n){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('a',{class:'back',href:'#accueil',text:'← Accueil'}));
    frag.appendChild(h('div',{class:'n-head',style:'--c:'+n.couleur},[
      h('span',{class:'mono',text:n.sous}), h('h1',{text:n.titre}),
      h('p',{text:'Cours, activités, exercices, vidéos et simulations, classés par thème.'})
    ]));
    var bar = h('div',{class:'filtres',role:'group','aria-label':'Filtrer par type'});
    var liste = h('div',{});
    [['tous','Tout']].concat(Object.keys(TYPES).map(function(k){ return [k, TYPES[k].l + (k==='exercice'?'':'' )]; })).forEach(function(p){
      var b = h('button',{type:'button',text:p[1],'aria-pressed':String(filtre===p[0])});
      b.addEventListener('click',function(){
        filtre = p[0];
        Array.prototype.forEach.call(bar.children,function(x){ x.setAttribute('aria-pressed','false'); });
        b.setAttribute('aria-pressed','true');
        draw();
      });
      bar.appendChild(b);
    });
    function draw(){
      liste.textContent = '';
      n.chapitres.forEach(function(ch){
        var rs = ch.ressources.filter(function(r){ return filtre==='tous' || r.type===filtre; });
        var ul = h('ul',{class:'res'});
        rs.forEach(function(r){ ul.appendChild(resItem(r)); });
        liste.appendChild(h('section',{class:'chap'},[
          h('h2',{},[ch.titre, h('span',{class:'mono',text:rs.length ? plur(rs.length) : ''})]),
          rs.length ? ul : h('p',{class:'vide',text: ch.ressources.length ? 'Aucune ressource de ce type pour le moment.' : 'Ressources à venir.'})
        ]));
      });
    }
    draw();
    frag.appendChild(bar); frag.appendChild(liste);
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
