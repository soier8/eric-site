const getSeoTitle = (title) => {
  return {
    inner: title
  }
}

const getSeoMeta = (params) => {
  return [
    {
      n: 'description',
      c: params.description || 'Site Oficial do Distrito Metropolitano Escoteiro de Minas Gerais - Escoteiros do Brasil. Conheça as atividades, grupos escoteiros, o que é o escotismo.'
    },
    {
      p: 'og:type',
      c: 'website'
    },
    {
      p: 'twitter:card',
      c: 'summary'
    },
    {
      p: 'og:site_name',
      c: 'Escoteiros do Distrito Metropolitano MG'
    },
    {
      p: 'twitter:site',
      c: 'Escoteiros do Distrito Metropolitano MG'
    },
    {
      p: 'twitter:url',
      c: params.url || window.location.href
    },
    {
      p: 'og:url',
      c: params.url || window.location.href
    },
    {
      p: 'twitter:title',
      c: params.title || 'Escoteiros do Distrito Metropolitano MG'
    },
    {
      p: 'og:title',
      c: params.title || 'Escoteiros do Distrito Metropolitano MG'
    },
    {
      p: 'twitter:description',
      c: params.description || 'Site Oficial do Distrito Metropolitano Escoteiro de Minas Gerais - Escoteiros do Brasil. Conheça as atividades, grupos escoteiros, o que é o escotismo.'
    },
    {
      p: 'og:description',
      c: params.description || 'Site Oficial do Distrito Metropolitano Escoteiro de Minas Gerais - Escoteiros do Brasil. Conheça as atividades, grupos escoteiros, o que é o escotismo.'
    },
    {
      p: 'twitter:image',
      c: params.image || require('../../assets/images/logo.png')
    },
    {
      p: 'og:image',
      c: params.image || require('../../assets/images/logo.png')
    }
  ]
}

export { getSeoTitle, getSeoMeta }
