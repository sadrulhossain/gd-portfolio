/**
 * @typedef {Object} EducationResult
 * @property {string} type - Result type, e.g. "CGPA" or "GPA".
 * @property {string} achieved - Achieved value, e.g. "3.70".
 * @property {string} full - Maximum possible value, e.g. "4.00".
 */

/**
 * @typedef {Object} Education
 * @property {string} degree - Degree name, e.g. "B.Sc. in CSE".
 * @property {string} uni_board - Institution or board name.
 * @property {string} tenure - Study period, e.g. "2013-17".
 * @property {string} [faculty] - Faculty HTML fragment, optional.
 * @property {string} [department] - Department HTML fragment, optional.
 * @property {string} [institute] - Institute HTML fragment, optional (used when uni_board is a board, not a university).
 * @property {string} [division] - Division HTML fragment, optional (used for board exams).
 * @property {EducationResult} result - Result achieved.
 */

/**
 * @typedef {Object} ExperienceTenure
 * @property {string} from - Start date, e.g. "Apr 2024".
 * @property {string} to - End date, e.g. "Present".
 */

/**
 * @typedef {Object} WorkExperience
 * @property {string} designation - Job title.
 * @property {string} company - Employer name.
 * @property {ExperienceTenure} tenure - Employment period.
 * @property {string[]} responsibilities - Bullet points describing the role.
 */

/**
 * @typedef {Object} Skill
 * @property {string} skill - Skill name.
 * @property {number} proficiency - Proficiency percentage (0-100).
 */

/**
 * @typedef {Object} TechnicalSkillCategory
 * @property {string} category - Category name, e.g. "Backend".
 * @property {Skill[]} skills - Skills within this category.
 */

/**
 * @typedef {Object} Project
 * @property {string} title - Project name.
 * @property {string} category - High-level category, e.g. "E-commerce".
 * @property {string} type - Short subtype/tagline shown under the title.
 * @property {string} image - Filename of the screenshot in src/assets/projects/.
 * @property {string} description - Short project description.
 * @property {string[]} technologies - Technology tags used on the project.
 * @property {string} [link] - Optional URL to the live project or repo.
 */

/**
 * @typedef {Object} SocialContact
 * @property {string} name - Display name, e.g. "LinkedIn".
 * @property {string} href - Full URL to the profile.
 * @property {string} icon - Icon key understood by <SocialIcon>: facebook | twitter | github | linkedin.
 */

/**
 * @typedef {Object} QuoteAuthor
 * @property {string} name - Author's name.
 * @property {string} affiliation - Author's affiliation/title.
 */

/**
 * @typedef {Object} Quote
 * @property {string} quote - The quote text.
 * @property {QuoteAuthor} quoter - Who said it.
 */

export {};
