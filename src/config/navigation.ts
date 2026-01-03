// Navigation configuration for the website
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
  },
  {
    label: "About Us",
    href: "#",
    icon: "Building",
    children: [
      {
        label: "Mandatory Public Disclosure",
        href: "#",
        children: [
          { label: "CBSE Mandatory Disclosure", href: "/disclosure/cbse" },
          {
            label: "Document & Information",
            href: "#",
            children: [
              { label: "General Affiliation Letter", href: "/disclosure/affiliation" },
              { label: "Registration Certificate", href: "/disclosure/registration" },
              { label: "State Govt Permission Grade", href: "/disclosure/permission" },
              { label: "Building Safety Certificate", href: "/disclosure/building-safety" },
              { label: "Fire NOC Certificate", href: "/disclosure/fire-noc" },
              { label: "DEO Report", href: "/disclosure/deo-report" },
              { label: "Sanitation Certificate", href: "/disclosure/sanitation" },
              { label: "Recognition under RTE Act", href: "/disclosure/rte" },
              { label: "DEO Certificate", href: "/disclosure/deo-certificate" },
            ],
          },
          {
            label: "Result & Academics",
            href: "#",
            children: [
              { label: "Fee Structure", href: "/disclosure/fee-structure" },
              { label: "SMC List", href: "/disclosure/smc" },
              { label: "Board Results (Last 3 Years)", href: "/disclosure/results" },
            ],
          },
        ],
      },
      { label: "Our School", href: "/our-school" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "DPS Society", href: "/about-society" },
      { label: "VES", href: "/ves" },
      { label: "Chairman's Message", href: "/chairman-message" },
      { label: "Pro-Vice Chairman's Message", href: "/vice-chairmans-message" },
      { label: "Director's Message", href: "/director-message" },
      { label: "Principal's Message", href: "/principal-message" },
      { label: "Management Committee", href: "/management-committee" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    icon: "BookOpen",
    children: [
      {
        label: "Curriculum",
        href: "#",
        children: [
          { label: "Pre-Primary & Primary", href: "/curriculum/pre-primary" },
          { label: "Middle & Secondary School", href: "/curriculum/middle-secondary" },
          { label: "Senior Secondary School", href: "/curriculum/senior-secondary" },
        ],
      },
      { label: "Student Care", href: "/student-care" },
      { label: "Our Purpose, Our Pride", href: "/our-purpose" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    label: "Admissions",
    href: "#",
    icon: "UserPlus",
    children: [
      { label: "Admission Process", href: "/admission-process" },
      { label: "Stream Offered for Grade XI", href: "/courses-offered" },
      { label: "Fee Structure", href: "/feestructure" },
      { label: "Transport", href: "/transport" },
      { label: "Document Upload Guidelines", href: "/documentupload" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    label: "Campus Life",
    href: "#",
    icon: "Users",
    children: [
      { label: "Inter House", href: "/inter-house" },
      { label: "Special Assemblies", href: "/special-assemblies" },
      { label: "Field Trips/Excursions", href: "/education-trip" },
      { label: "Workshops", href: "/workshops" },
      { label: "Guest Visits", href: "/guests-visits" },
      { label: "Student Council", href: "/student-council" },
      { label: "NCC", href: "/ncc" },
      { label: "Social Outreach", href: "/social-outreach" },
    ],
  },
  {
    label: "Infrastructure",
    href: "#",
    icon: "Building2",
    children: [
      { label: "Our Campus", href: "/infrastructure-our-campus" },
      {
        label: "Student Engagement Facilities",
        href: "#",
        children: [
          { label: "Smart Classes", href: "/smart-classes" },
          { label: "Library", href: "/infrastructure-library" },
          { label: "Innovation Labs", href: "/innovation-labs" },
          { label: "Computer Labs", href: "/computer-lab" },
        ],
      },
      { label: "Sports Facilities", href: "/infrastructure-sports-facilities" },
      { label: "Transport Facilities", href: "/infrastructure-transport" },
      { label: "Medical Facilities", href: "/infrastructure-medical" },
    ],
  },
  {
    label: "Sports",
    href: "#",
    icon: "Trophy",
    children: [
      { label: "Sports at DPS", href: "/sports-dps" },
      { label: "Sports Offered", href: "/sports-offered" },
      { label: "Sporting Events", href: "/sporting-events" },
      { label: "Sports Awards & Achievements", href: "/awards-achievements" },
    ],
  },
  {
    label: "Media",
    href: "#",
    icon: "Camera",
    children: [
      {
        label: "Gallery",
        href: "#",
        children: [
          { label: "Picture Gallery", href: "/gallery" },
          { label: "Video Gallery", href: "/video-gallery" },
        ],
      },
      { label: "Dipscoop", href: "/dipscoop" },
      { label: "Little Learners Lounge", href: "/little-learners-lounge" },
      { label: "Loquacity", href: "/loquacity" },
      { label: "Year Books", href: "/year-book" },
      { label: "Awards & Achievements", href: "/media-awards" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: "MapPin",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/our-school" },
    { label: "Admissions", href: "/admission-process" },
    { label: "Academics", href: "/curriculum/pre-primary" },
    { label: "Campus Life", href: "/inter-house" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  resources: [
    { label: "Fee Structure", href: "/feestructure" },
    { label: "Transport", href: "/transport" },
    { label: "FAQs", href: "/faq" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  legal: [
    { label: "CBSE Disclosure", href: "/disclosure/cbse" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/dpshyderabad", icon: "Facebook" },
  { label: "Twitter", href: "https://twitter.com/dpshyderabad", icon: "Twitter" },
  { label: "Instagram", href: "https://instagram.com/dpshyderabad", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/dpshyderabad", icon: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/dpshyderabad", icon: "Linkedin" },
];

export const contactInfo = {
  address: "Mahendra Hills, Secunderabad, Telangana 500026",
  phone: "+91 40 2780 1234",
  email: "info@dpshyderabad.in",
  hours: "Mon - Sat: 8:00 AM - 4:00 PM",
};
