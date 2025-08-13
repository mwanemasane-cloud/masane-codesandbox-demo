
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const now = new Date().toISOString()

const articles = [
  {
    id: 1,
    attributes: {
      title: "Présidentielle gabonaise de septembre 2025 : un scrutin décisif",
      slug: "elections-presidentielles-gabon-2025",
      excerpt: "Entre espoirs de renouveau et tensions politiques, le Gabon se prépare à un vote historique.",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "Politique",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1584467735871-040e0b37d7b7?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "Politique" } } }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Santé : l’hôpital gabonais face à ses défis",
      slug: "hopital-gabon-defis-2025",
      excerpt: "Manque de personnel, équipements vétustes, financement incertain : les réformes urgentes.",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "Santé",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1580281657525-94c1d1f1c9b1?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "Santé" } } }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Ukraine : vers un nouvel équilibre géopolitique mondial ?",
      slug: "geopolitique-ukraine-2025",
      excerpt: "Les conséquences de la guerre en Ukraine sur les alliances et les marchés mondiaux.",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "International",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1549921296-3b4a6b5c51a4?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "International" } } }
    }
  },
  {
    id: 4,
    attributes: {
      title: "Réforme de l'éducation : quelles priorités au Gabon ?",
      slug: "reforme-education-gabon",
      excerpt: "Bâtiments, formation, gouvernance : trois chantiers clés pour une école plus juste et efficace.",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "Analyse",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "Analyse" } } }
    }
  },
  {
    id: 5,
    attributes: {
      title: "CEMAC : l'intégration régionale gagne-t-elle du terrain ?",
      slug: "cemac-integration-2025",
      excerpt: "Libre circulation, infrastructures, monnaie : où en est-on réellement en 2025 ?",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "Économie",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "Économie" } } }
    }
  },
  {
    id: 6,
    attributes: {
      title: "Climat : les villes africaines face aux extrêmes",
      slug: "climat-villes-africaines",
      excerpt: "Inondations, vagues de chaleur : des stratégies locales de résilience émergent.",
      content: "Contenu de l'article...",
      publishAt: now,
      tag: "Climat",
      image: { data: { attributes: { url: "https://images.unsplash.com/photo-1502303756782-0a39f7a1da3e?q=80&w=1200&auto=format&fit=crop" } } },
      category: { data: { attributes: { label: "Climat" } } }
    }
  }
]

const edito = {
  data: {
    id: 1,
    attributes: {
      title: "L’édito de la semaine",
      content: "Cette semaine, nous explorons les enjeux de la gouvernance au Gabon face aux défis économiques et sociaux actuels.",
      author: {
        data: {
          attributes: {
            name: "Léandre Bapassi Be Pambo",
            avatar: {
              data: { attributes: { url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&h=500&fit=crop" } }
            }
          }
        }
      }
    }
  }
}

const episodes = {
  data: [
    {
      id: 1,
      attributes: {
        title: "Chapitre 1 – Les ombres de Libreville",
        excerpt: "Sous les pluies chaudes de Libreville, les rues semblent chuchoter des secrets anciens…",
        image: { data: { attributes: { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop" } } },
        publishAt: now
      }
    }
  ]
}

app.get('/api/articles', (req, res) => res.json({ data: articles }))
app.get('/api/edito', (req, res) => res.json(edito))
app.get('/api/episodes', (req, res) => res.json(episodes))

const PORT = 3001
app.listen(PORT, () => console.log('Mock Strapi API running on http://localhost:' + PORT))
