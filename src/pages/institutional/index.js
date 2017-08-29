import Institutional from './Institutional.vue'
import InstitutionalHome from './home/InstitutionalHome.vue'

import direDistri from './direDistri/direDistri.vue'
import finanAssist from './finanAssist/finanAssist.vue'
import admAssist from './admAssist/admAssist.vue'
import assistEtic from './assistEtic/assistEtic.vue'
import adultGest from './adultGest/adultGest.vue'
import formAssist from './formAssist/formAssist.vue'
import assistHuman from './assistHuman/assistHuman.vue'
import comunAssist from './comunAssist/comunAssist.vue'
import assistPione from './assistPione/assistPione.vue'
import assistEscoteiro from './assistEscoteiro/assistEscoteiro.vue'
import radAssist from './radAssist/radAssist.vue'
import assistSen from './assistSen/assistSen.vue'
import assistLob from './assistLob/assistLob.vue'
import planProg from './planProg/planProg.vue'

const routes = {
  path: '/institucional',
  component: Institutional,
  children: [
    {
      path: '',
      name: 'institutionalHome',
      meta: {
        breadcrumb: 'Institucional - Distrito Metropolitano de Minas Gerais / Home'
      },
      component: InstitutionalHome
    },
    {
      path: 'diretor-distrital',
      name: 'direDistri',
      meta: {
        breadcrumb: 'Institucional / Diretor Distrital'
      },
      component: direDistri
    },
    {
      path: 'assistentes-distritais-financeiro',
      name: 'financCoord',
      meta: {
        breadcrumb: 'Institucional / Assistente Financeiro'
      },
      component: finanAssist
    },
    {
      path: 'assistente-administrativo',
      name: 'assistAdmn',
      meta: {
        breadcrumb: 'Institucional / Assistentes Administrativos'
      },
      component: admAssist
    },
    {
      path: 'assistente-de-etica',
      name: 'eticAssit',
      meta: {
        breadcrumb: 'Institucional / Assistente de Etica e Disciplina'
      },
      component: assistEtic
    },
    {
      path: 'assistente-gestao-adultos',
      name: 'gestAdult',
      meta: {
        breadcrumb: 'Institucional / Assistente De Gestão de Adultos'
      },
      component: adultGest
    },
    {
      path: 'assistente-formacao-adultos',
      name: 'assitForma',
      meta: {
        breadcrumb: 'Institucional / Assistentes de Formaçao de Adultos'
      },
      component: formAssist
    },
    {
      path: 'assistente-mobilizacao-humanitaria',
      name: 'humaniAssist',
      meta: {
        breadcrumb: 'Institucional / Assistente de Mobilização Humanitária'
      },
      component: assistHuman
    },
    {
      path: 'assistente-de-comunicacao',
      name: 'assistComunic',
      meta: {
        breadcrumb: 'Institucional / Assistentes de Comunicação e Imagem'
      },
      component: comunAssist
    },
    {
      path: 'assistente-radio',
      name: 'assistRad',
      meta: {
        breadcrumb: 'Institucional / Assistente de Radio-escotismo'
      },
      component: radAssist
    },
    {
      path: 'assistente-planejamento-programa',
      name: 'assistPlan',
      meta: {
        breadcrumb: 'Institucional / Assistente de Planejamento e Programa'
      },
      component: planProg
    },
    {
      path: 'assistente-lobo',
      name: 'assistLob',
      meta: {
        breadcrumb: 'Institucional / Assistente do Ramo Lobinho'
      },
      component: assistLob
    },
    {
      path: 'assistente-escoteiro',
      name: 'assistEsc',
      meta: {
        breadcrumb: 'Institucional / Assistente do Ramo Escoteiro'
      },
      component: assistEscoteiro
    },
    {
      path: 'assistente-senior',
      name: 'assistSen',
      meta: {
        breadcrumb: 'Institucional / Assistente do Ramo Sênior'
      },
      component: assistSen
    },
    {
      path: 'assistente-pioneiro',
      name: 'assistPio',
      meta: {
        breadcrumb: 'Institucional / Assistente do Ramo Pioneiro'
      },
      component: assistPione
    }
  ]
}

export { routes }
