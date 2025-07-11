const skps = [
    {
      name: "SCP-049",
      url: "https://scp-wiki.wikidot.com/scp-049",
      id: "1eac",
    },
    {
      name: "SCP-500",
      url: "https://scp-wiki.wikidot.com/scp-500",
      id: "282e",
    },
    {
      name: "SCP-1344",
      url: "https://scp-wiki.wikidot.com/scp-1344",
      id: "aaa9",
    },
    {
      name: "Departments",
      url: "https://scp-wiki.wikidot.com/departments",
      id: "29c3",
    },
    {
      name: "List of Foundation's Internal Departments",
      url: "https://scp-wiki.wikidot.com/list-of-foundation-s-internal-departments#toc0",
      id: "146a",
    },
    {
      name: "O5 Command Dossier",
      url: "https://scp-wiki.wikidot.com/o5-command-dossier",
      id: "d97e",
    },
    {
      name: "Personnel and Character Dossier",
      url: "https://scp-wiki.wikidot.com/personnel-and-character-dossier",
      id: "cc0d",
    },
    {
      name: "K-Class Complete List",
      url: "https://scp-wiki.wikidot.com/k-class-complete-list",
      id: "4685",
    },
    {
      name: "SCP-173",
      url: "https://scp-wiki.wikidot.com/scp-173",
      id: "fac3",
    },
    {
      name: "Species Complete List",
      url: "https://scp-wiki.wikidot.com/species-complete-list#toc12",
      id: "b371",
    },
    {
      name: "Task Forces",
      url: "https://scp-wiki.wikidot.com/task-forces",
      id: "c335",
    },
    {
      name: "GOC Complete List",
      url: "https://scp-wiki.wikidot.com/goi-complete-list",
      id: "224f",
    },
    {
      name: "Lockdown Procedures",
      url: "https://scp-wiki.wikidot.com/lockdown-procedures",
      id: "33a2",
    },
    {
      name: "Departments Complete List",
      url: "https://scp-wiki.wikidot.com/departments-complete-list",
      id: "fc1b",
    },
    {
      name: "K-Class Complete List (again)",
      url: "https://scp-wiki.wikidot.com/k-class-complete-list",
      id: "c68e",
    },
    {
      name: "Task Forces Complete List",
      url: "https://scp-wiki.wikidot.com/task-forces-complete-list",
      id: "a6ab",
    },
    {
      name: "Esoteric Classes Complete List",
      url: "https://scp-wiki.wikidot.com/esoteric-classes-complete-list",
      id: "dee7",
    },
    {
      name: "Alexandra Tag Page",
      url: "https://scp-wiki.wikidot.com/system:page-tags/tag/alexandra",
      id: "0839",
    },
    {
      name: "Nobody Hub",
      url: "https://scp-wiki.wikidot.com/nobody-hub",
      id: "5dcb",
    },
    {
      name: "Nobody's Business",
      url: "https://scp-wiki.wikidot.com/nobody-s-business",
      id: "ccf7",
    },
    {
      name: "Nobody Dies",
      url: "https://scp-wiki.wikidot.com/nobody-dies",
      id: "add8",
    },
    {
      name: "A Poem for Nobody",
      url: "https://scp-wiki.wikidot.com/a-poem-for-nobody",
      id: "1d61",
    },
    {
      name: "Audio Adaptations A-B",
      url: "https://scp-wiki.wikidot.com/audio-adaptations#a-b",
      id: "777d",
    },
    {
      name: "GOC Hub Page (Page 3)",
      url: "https://scp-wiki.wikidot.com/goc-hub-page/p/3",
      id: "501b",
    },
    {
      name: "SCP-4450",
      url: "https://scp-wiki.wikidot.com/scp-4450",
      id: "013c",
    },
    {
      name: "SCP-5514",
      url: "https://scp-wiki.wikidot.com/scp-5514",
      id: "e8f9",
    },
    {
      name: "Glossary of Terms",
      url: "https://scp-wiki.wikidot.com/glossary-of-terms",
      id: "716c",
    },
    {
      name: "SCP-914",
      url: "https://scp-wiki.wikidot.com/scp-914",
      id: "69d4",
    },
    {
      name: "Experiment Log 914 Hub",
      url: "https://scp-wiki.wikidot.com/experiment-log-914-hub",
      id: "27bb",
    },
    {
      name: "Apollyon Tag Page",
      url: "https://scp-wiki.wikidot.com/system:page-tags/tag/apollyon#pages",
      id: "bea5",
    },
    {
      name: "Updated Amnestics Guide",
      url: "https://scp-wiki.wikidot.com/updated-amnestics-guide",
      id: "7aa5",
    },
    {
      name: "Archived Security Clearance Levels",
      url: "https://scp-wiki.wikidot.com/archived:security-clearance-levels",
      id: "a84d",
    },
    {
      name: "Things New Level-3 Researchers Should Know",
      url: "https://scp-wiki.wikidot.com/things-new-level-3-researchers-should-know",
      id: "a2de",
    },
    {
      name: "Hello Muddah",
      url: "https://scp-wiki.wikidot.com/hellomuddah",
      id: "b223",
    },
    {
      name: "Security Clearance Levels (Section 5)",
      url: "https://scp-wiki.wikidot.com/security-clearance-levels#toc5",
      id: "fbeb",
    },
    {
      name: "GOC Supplemental Strike Teams",
      url: "https://scp-wiki.wikidot.com/goc-supplemental-strike-teams",
      id: "0585",
    },
    {
      name: "GOC Hub Page",
      url: "https://scp-wiki.wikidot.com/goc-hub-page",
      id: "a593",
    },
    {
      name: "Captain Kirby's Proposal",
      url: "https://scp-wiki.wikidot.com/captain-kirby-s-proposal",
      id: "2604",
    },
    {
      name: "SCP-001",
      url: "https://scp-wiki.wikidot.com/scp-001",
      id: "cc44",
    },
    {
      name: "Orgy-5 Counsel-9",
      url: "https://scp-wiki.wikidot.com/orgy-5-counsel-9",
      id: "53c3",
    },
    {
      name: "Liz the GM's Proposal",
      url: "https://scp-wiki.wikidot.com/liz-the-gm-s-proposal",
      id: "3dae",
    },
    {
      name: "Secure Facility Dossier Area-14",
      url: "https://scp-wiki.wikidot.com/secure-facility-dossier-area-14",
      id: "8f01",
    },
    {
      name: "SCP-207",
      url: "https://scp-wiki.wikidot.com/scp-207",
      id: "13fb",
    },
    {
      name: "Resource Tag Page",
      url: "https://scp-wiki.wikidot.com/system:page-tags/tag/resource#pages",
      id: "91d8",
    },
    {
      name: "Essay Resource Hub",
      url: "https://scp-wiki.wikidot.com/essay-resource-hub",
      id: "f7e6",
    },
    {
      name: "Memetics and Infohazards Division Orientation",
      url: "https://scp-wiki.wikidot.com/memetics-and-infohazards-division-orientation",
      id: "aff5",
    },
    {
      name: "List of Foundation's Internal Departments (Section 8)",
      url: "https://scp-wiki.wikidot.com/list-of-foundation-s-internal-departments#toc8",
      id: "ab13",
    },
    {
      name: "And This One Explains Humes",
      url: "https://scp-wiki.wikidot.com/and-this-one-explains-humes",
      id: "b100",
    },
    {
      name: "An FAQ Part Two: Your Hume Questions Answered",
      url: "https://scp-wiki.wikidot.com/an-faq-part-two-or-your-hume-questions-answered",
      id: "72dd",
    },
    {
      id: "91d9",
      name: "SCP-3114",
      url: "https://scp-wiki.wikidot.com/scp-3114",
    },
    {
      id: "6c3b",
      name: "Nobody likes snake",
      url: "https://scp-wiki.wikidot.com/nobody-likes-a-sneak",
    },
    {
      id: "99b7",
      name: "SCP-2521 Villians",
      url: "https://villains.fandom.com/wiki/SCP-2521",
    },
    {
      id: "28b0",
      name: "SCP-2521",
      url: "https://scp-wiki.wikidot.com/scp-2521",
    },
    {
      id: "d077",
      name: "SCP-3000",
      url: "https://scp-wiki.wikidot.com/scp-3000",
    },
    {
      id: "8e41",
      name: "Updated Amnestics Guide",
      url: "https://scp-wiki.wikidot.com/updated-amnestics-guide",
    },
    {
      id: "dbb5",
      name: "A Laymen's Guide to Tagging",
      url: "https://scp-wiki.wikidot.com/a-laymen-s-guide-to-tagging",
    },
    {
      id: "9569",
      name: "Guide Hub",
      url: "https://scp-wiki.wikidot.com/guide-hub",
    },
    {
      id: "d7c9",
      name: "Обновлённая классификация амнезиаков",
      url: "https://scpfoundation.net/updated-amnestics-guide",
    },
    {
      id: "7ddb",
      name: "Facilities locations",
      url: "https://scp-wiki.wikidot.com/secure-facilities-locations",
    },
    {
      id: "cfb9",
      name: "Sandbox",
      url: "https://scp-sandbox-3.wikidot.com/",
    },
    {
      id: "aeb3",
      name: "Kiryu Labs Hub",
      url: "https://scp-wiki.wikidot.com/kiryu-labs-hub",
    },
    {
      id: "8fea",
      name: "SCP-CN-2626",
      url: "https://scp-wiki.wikidot.com/scp-cn-2626",
    },
    {
      id: "fec7",
      name: "Site-19 Facility 23 Dossier",
      url: "https://scp-wiki.wikidot.com/experiment-log-914-hub",
    },
]
export default skps;