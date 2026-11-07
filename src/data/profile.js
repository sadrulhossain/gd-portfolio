import { withBase } from '../lib/base.js'

/**
 * Small inline brand-logo helper for the About Me highlights below.
 * @param {string} src
 * @param {number} [width]
 * @param {number} [height]
 */
const logo = (src, width = 16, height = 16) =>
    `<img src="${src}" width="${width}" height="${height}" alt="" style="display:inline-block;vertical-align:middle;" />`

const ROBI_LOGO = 'https://www.google.com/s2/favicons?domain=robi.com.bd&sz=32'
const CIRKLE_LOGO = withBase('/brand-logos/cirkle.svg')
const ATOM_LOGO = withBase('/brand-logos/atom.png')
const DARAZ_LOGO = 'https://laz-img-cdn.alicdn.com/imgextra/i1/O1CN01V8uEDV1jdZ9U2wL90_!!6000000004571-73-tps-64-64.ico'
const PORTONICS_LOGO = 'https://cdn.prod.website-files.com/689a86396206fe0c469a15fc/69034a7087a0562b05554724_fav.svg'
const BANGLALINK_LOGO = 'https://www.google.com/s2/favicons?domain=banglalink.net&sz=32'

/**
 * @typedef {Object} Profile
 * @property {string} name - Full name.
 * @property {string} role - Headline role/title shown in the hero.
 * @property {string} location - City, country.
 * @property {string} email - Contact email.
 * @property {string} phone - Contact phone, in a human-readable format.
 * @property {string} phoneHref - Same phone number formatted for a tel: link.
 * @property {string} summary - Short "About Me" paragraph.
 * @property {string[]} highlights - About Me bullet points, as HTML fragments (may contain <b> and <a>).
 * @property {string} cvPath - Public path to the downloadable CV PDF.
 */

/** @type {Profile} */
export const profile = {
    name: 'S. Sadrul Hossain',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'hossainsadrul@gmail.com',
    phone: '+880 1885-547800',
    phoneHref: '+8801885547800',
    summary: `Hello, I am S. Sadrul Hossain, Seasoned Software Engineer with <b>7+ years</b> of progressive experience building <b>scalable, secure, and high-traffic applications</b> across several major industry verticals — <b>fintech, telecom, SaaS, defense/education distribution and export-import</b>. From engineering <b>PSO payment gateways</b> with multi-provider integration to developing self-care applications for <b>66M+ subscriber base of Robi and Cirkle</b>, I bring a proven ability to deliver complex solutions under tight deadlines with <b>100% sprint success rate</b>. Technically deep in the <b>Laravel ecosystem, Vue.js, and relational databases</b>, with hands-on exposure to <b>AI-assisted and spec-driven development</b> practices, and a growing focus on system design, microservices architecture, and large-scale technical decision-making in pursuit of a software architecture career path.`,
    highlights: [
        `🔭 Currently working at ${logo(PORTONICS_LOGO)} <a href="https://portonics.com/"><b>Portonics Limited</b></a> (Robi Single App Team) — building APIs for ${logo(ROBI_LOGO)} <a href="https://www.robi.com.bd/en"><b>My Robi App</b></a> & ${logo(CIRKLE_LOGO, 27, 16)} <a href="https://cirkle.digital/en"><b>My Cirkle App</b></a>, serving <b>56M+ Robi subscribers</b> and <b>10M+ Cirkle subscribers</b>`,
        `🏢 Previously at ${logo(PORTONICS_LOGO)} <a href="https://portonics.com/"><b>Portonics Limited</b></a> (Eagle App Team) — built APIs for ${logo(ATOM_LOGO)} <a href="https://www.atom.com.mm/en"><b>ATOM Myanmar</b></a>'s agent app, serving <b>300k+ users</b>`,
        `🏢 Previously at ${logo(DARAZ_LOGO)} <a href="https://www.daraz.com.bd/"><b>Daraz BD (Alibaba Group)</b></a> — architected SaaS platforms for 5 business ventures`,
        '💳 Engineered <b>PSO payment gateways</b> integrating AMEX, Mastercard & Visa, processing <b>1M+ BDT/month</b>',
        `📱 Developed <b>PWAs used by 41M+ subscribers</b> of ${logo(BANGLALINK_LOGO)} <a href="https://banglalink.net"><b>Banglalink</b></a>`,
        '🎯 Growing focus on <b>System Design & Software Architecture</b>',
    ],
    cvPath: '/cv/sadrul-hossain-cv.pdf',
}
