import { withBase } from '../lib/base.js'

/**
 * Small inline brand-logo helper for the About Me highlights below.
 * @param {string} src
 * @param {number} [width]
 * @param {number} [height]
 */
const logo = (src, width = 16, height = 16) =>
    `<img src="${src}" width="${width}" height="${height}" alt="" style="display:inline-block;vertical-align:middle;" />`

const CURRENT_COMPANY_LOGO = '#'

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
    name: 'John Doe',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'johndoe@gmail.com',
    phone: '+*** ****-******',
    phoneHref: '+*************',
    summary: `Hello, I am John Doe, your-career-summary`,
    highlights: [
        `🔭 Currently working at ${logo(CURRENT_COMPANY_LOGO)} <a href="#"><b>your-company-name</b></a> (your-team) — responsibilities-achievement-in-one-line`,
        `🏢 Previously at `,
        `💳 some-previous-achievements`,
        '🎯 Growing focus on <b>your-career-goal-in-one-line</b>',
    ],
    cvPath: '/cv/my-cv.pdf',
}
