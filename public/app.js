(function(){
  var S = window.SITE, main = document.getElementById('main') || document.getElementById('contenu');
  var TYPES = {
    cours:{l:'Cours',g:'Cours',a:'Ouvrir le PDF'},
    activite:{l:'Activité',g:'Activités',a:'Ouvrir le PDF'},
    exercice:{l:'Exercices',g:'Exercices',a:'Ouvrir le PDF'},
    animation:{l:'Animation / simulation',g:'Animations et simulations',a:'Lancer'},
    video:{l:'Capsule vidéo',g:'Capsules vidéo',a:'Regarder'},
    maths:{l:'Point maths',g:'Points maths',a:'Ouvrir le PDF'}
  };

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

  function resItem(r, niveauNom, sansTag){
    var t = TYPES[r.type] || {l:r.type, a:'Ouvrir'};
    var href = r.fichier || r.url;
    var info = [h('b',{text:r.titre})];
    var meta = [];
    if (niveauNom) meta.push(niveauNom);
    if (r.desc) meta.push(r.desc);
    if (meta.length) info.push(h('small',{text:meta.join(' · ')}));
    return h('li',{class:sansTag ? 'r notag' : 'r'},[
      sansTag ? null : h('span',{class:'tag',text:t.l}),
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

  function slug(t){
    return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40);
  }
  function chId(ch){ return ch.id || slug(ch.titre); }

  function head(n, kicker, titre, texte){
    return h('div',{class:'n-head',style:'--c:'+n.couleur},[
      h('span',{class:'mono',text:kicker}), h('h1',{text:titre}),
      texte ? h('p',{text:texte}) : null
    ]);
  }
  function carte(n, href, titre, sous, k){
    return h('li',{},[h('a',{class:'niv',href:href,style:'--c:'+n.couleur},[
      h('h3',{text:titre}),
      sous ? h('span',{class:'s',text:sous}) : null,
      h('span',{class:'k',text:k})
    ])]);
  }

  /* Niveau : liste des chapitres */
  function niveau(n){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('a',{class:'back',href:'#accueil',text:'← Accueil'}));
    frag.appendChild(head(n, n.sous, n.titre, 'Choisis un chapitre.'));
    var ul = h('ul',{class:'chapitres'});
    n.chapitres.forEach(function(ch){
      var c = ch.ressources.length;
      ul.appendChild(carte(n, '#'+n.id+'/'+chId(ch), ch.titre, '', c ? plur(c) : 'à venir'));
    });
    frag.appendChild(ul);
    return frag;
  }

  /* Chapitre : les 6 rubriques */
  function chapitre(n, ch){
    var frag = document.createDocumentFragment();
    frag.appendChild(h('a',{class:'back',href:'#'+n.id,text:'← '+n.titre}));
    frag.appendChild(head(n, n.titre, ch.titre, 'Choisis une rubrique.'));
    var ul = h('ul',{class:'rubriques'});
    Object.keys(TYPES).forEach(function(k){
      var c = ch.ressources.filter(function(r){ return r.type===k; }).length;
      ul.appendChild(carte(n, '#'+n.id+'/'+chId(ch)+'/'+k, TYPES[k].g, '', c ? c + (c>1 ? ' documents' : ' document') : 'à venir'));
    });
    frag.appendChild(ul);
    return frag;
  }

  /* Rubrique : les ressources */
  function liste(rs){
    var ul = h('ul',{class:'res'});
    rs.forEach(function(r){ ul.appendChild(resItem(r,null,true)); });
    return ul;
  }

  /* Rubrique : les ressources, éventuellement rangées en sous-rubriques (champ "groupe") */
  function rubrique(n, ch, k, g){
    var frag = document.createDocumentFragment();
    var base = '#'+n.id+'/'+chId(ch)+'/'+k;
    var rs = ch.ressources.filter(function(r){ return r.type===k; });
    rs.sort(function(a,b){ return (a.date||'').localeCompare(b.date||''); });
    var noms = [];
    rs.forEach(function(r){ if (r.groupe && noms.indexOf(r.groupe)<0) noms.push(r.groupe); });

    var nom = g ? noms.filter(function(x){ return slug(x)===g; })[0] : null;
    if (nom){
      frag.appendChild(h('a',{class:'back',href:base,text:'← '+TYPES[k].g}));
      frag.appendChild(head(n, ch.titre+' · '+TYPES[k].g, nom));
      frag.appendChild(liste(rs.filter(function(r){ return r.groupe===nom; })));
      return frag;
    }
    frag.appendChild(h('a',{class:'back',href:'#'+n.id+'/'+chId(ch),text:'← '+ch.titre}));
    frag.appendChild(head(n, ch.titre, TYPES[k].g, noms.length ? 'Choisis une activité.' : null));
    if (!rs.length){ frag.appendChild(h('p',{class:'vide',text:'Ressources à venir.'})); return frag; }
    if (noms.length){
      var ul = h('ul',{class:'chapitres'});
      noms.forEach(function(x){
        var c = rs.filter(function(r){ return r.groupe===x; }).length;
        ul.appendChild(carte(n, base+'/'+slug(x), x, '', c + (c>1 ? ' documents' : ' document')));
      });
      frag.appendChild(ul);
    }
    var libres = rs.filter(function(r){ return !r.groupe; });
    if (libres.length) frag.appendChild(liste(libres));
    return frag;
  }

  function route(){
    var parts = location.hash.replace('#','').split('/');
    var n = S.niveaux.filter(function(x){return x.id===parts[0];})[0];
    var ch = n && parts[1] ? n.chapitres.filter(function(c){return chId(c)===parts[1];})[0] : null;
    var k = ch && parts[2] && TYPES[parts[2]] ? parts[2] : null;
    main.textContent = '';
    renderNav(n ? n.id : '');
    if (n && ch && k){ main.appendChild(rubrique(n,ch,k,parts[3])); document.title = (parts[3] ? '' : TYPES[k].g + ' · ') + ch.titre; }
    else if (n && ch){ main.appendChild(chapitre(n,ch)); document.title = ch.titre + ' · ' + n.titre; }
    else if (n){ main.appendChild(niveau(n)); document.title = n.titre + ' · Physique-Chimie, M. Oustou'; }
    else { main.appendChild(accueil()); document.title = 'Physique-Chimie, M. Oustou'; }
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
