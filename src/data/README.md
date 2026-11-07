# Content data

Every section of the site is rendered by mapping over one of these arrays. To add, edit, or
remove content, edit the array — no component or markup changes are needed. Field shapes are
documented with JSDoc typedefs in [`types.js`](./types.js) for editor autocomplete.

Optional fields are handled gracefully by the components (missing link/date/image will not break
layout). Arrays are rendered in the order they're written, so reorder entries directly in the file
if you want a different display order.

## `profile.js`

A single `profile` object (not an array) with your name, role, contact details, About Me summary
and highlight bullets, and the path to your CV PDF. Used by the hero, contact section, footer, and
the page `<title>`/meta tags/JSON-LD.

```js
export const profile = {
    name: 'Jane Doe',
    role: 'Software Engineer',
    location: 'Dhaka, Bangladesh',
    email: 'jane@example.com',
    phone: '+880 1234-567890',
    phoneHref: '+8801234567890',
    summary: 'Short About Me paragraph.',
    highlights: ['🔭 Currently working at <a href="https://example.com"><b>Acme Inc.</b></a>'],
    cvPath: '/cv/jane-doe-cv.pdf',
}
```

## `education.js` — `educations`

One entry per degree/certificate, most recent first. `institute`/`division` are used for board
exams (HSC/SSC); `faculty`/`department` are used for university degrees. Unused ones are left as
empty strings — leave them that way rather than omitting the key.

```js
{
    degree: 'B.Sc. in CSE',
    uni_board: 'Some University',
    tenure: '2013-17',
    faculty: '<b>Faculty:</b> Science<br />\n',
    department: '<b>Department:</b> CSE<br />\n',
    institute: '',
    division: '',
    result: { type: 'CGPA', achieved: '3.81', full: '4.00' },
}
```

## `work-experience.js` — `work_experiences`

One entry per role, most recent first.

```js
{
    designation: 'Software Engineer',
    company: 'Acme Inc.',
    tenure: { from: 'Apr 2024', to: 'Present' },
    responsibilities: ['Built and shipped X.', 'Improved Y by Z%.'],
}
```

## `technical-skill.js` — `technical_skill`

Skills grouped by category with a proficiency percentage (0–100) driving the progress bar width.
Only add a skill/category if you actually want a percentage bar rendered for it — don't invent
numbers.

```js
{
    category: 'Backend',
    skills: [{ skill: 'Laravel', proficiency: 92 }],
}
```

## `professional-skill.js` — `professional_skill`

Soft skills with a proficiency percentage, rendered as circular progress indicators.

```js
{ skill: 'Communication', proficiency: 85 }
```

## `technical-expertise.js` — `technical_expertise` / `professional-expertise.js` — `professional_expertise`

Flat arrays of plain tag strings (no percentages), rendered as pill tags under About Me.

```js
export const technical_expertise = ['PHP', 'Laravel', 'AWS']
```

## `featured-projects.js` — `projects`

Project cards, most-notable-first (array order = display order).

```js
{
    title: 'My Project',
    category: 'E-commerce',
    type: 'Storefront',
    image: 'my-project.png', // filename only, must exist in src/assets/projects/
    description: 'One or two sentence summary.',
    technologies: ['PHP', 'Laravel', 'MySQL'],
    link: 'https://example.com', // optional
}
```

Drop the matching screenshot into `src/assets/projects/` using the exact filename referenced by
`image` — it is picked up automatically and optimised by Astro's image pipeline.

## `social-contact.js` — `social_contacts`

Social links rendered in the hero and footer. `icon` must be one of the keys understood by
`<SocialIcon>`: `facebook`, `twitter`, `github`, `linkedin`.

```js
{ name: 'GitHub', href: 'https://github.com/you', icon: 'github' }
```

## `quotes.js` — `quotes`

Pull-quote(s) shown in the quotes section.

```js
{ quote: 'Some quote.', quoter: { name: 'Author Name', affiliation: 'Their title' } }
```
