import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for layout and design
/* Main wrapper for the page content */
const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 960px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
`;

/* Wrapper for individual sections */
const Section = styled.div`
  margin-bottom: 1.5rem;
`;

/* Styling for the main page title */
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

/* Styling for section subtitles */
const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

/* General paragraph styling for descriptive content */
const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

/* Container for expandable sections */
const ExpandableSection = styled.div`
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

/* Header for each expandable section */
const Header = styled.div`
  padding: 1rem;
  background-color: #0070f3;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #005bb5;
  }
`;

/* Content inside an expandable section */
const Content = styled.div<{ isOpen: boolean }>`
  padding: 1rem;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

/* Rotating arrow for visual feedback on section toggle */
const Arrow = styled.span<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

/* List of examples inside expandable sections */
const ExampleList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  list-style-type: disc;
`;

/* Individual items in the example list */
const ExampleItem = styled.li`
  margin-bottom: 0.5rem;
`;

/* General unordered list for structured content */
const List = styled.ul`
  list-style: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

/* Individual list items */
const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

// Component for the Corporate Courses page
export default function CorporateCourses() {
    // State to track which section is expanded
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Function to toggle section visibility
    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    // Data for industries and their examples
    const industries = [
    {
      title: 'Corporate & Finance',
      examples: [
        'Business Reporting: Writing and understanding financial reports, balance sheets, and income statements.',
        'Investment Terminology: Key vocabulary for discussing investments, stocks, bonds, and market trends.',
        'Financial Presentations: Phrasing and techniques for presenting financial data and performance to stakeholders.',
        'Negotiations & Deals: Language for negotiating contracts, terms, and pricing in financial and corporate settings.',
        'Corporate Emails: Writing clear and professional emails related to finance, contracts, and corporate decisions.',
      ],
    },
    {
      title: 'Marketing & Advertising',
      examples: [
        'Marketing Communication: Vocabulary and phrases used in advertising campaigns, product launches, and market research.',
        'Branding & Positioning: How to discuss brand strategies, market positioning, and consumer behavior in English.',
        'Sales Presentations: Techniques for pitching products and services to potential clients in a compelling and persuasive manner.',
        'Digital Marketing: Key terms related to SEO, content marketing, PPC, social media campaigns, and analytics.',
        'Client Communication: Writing proposals, managing client relationships, and discussing marketing strategies effectively.',
      ],
    },
    {
      title: 'Healthcare & Pharmaceuticals',
      examples: [
        'Medical Terminology: Essential language for discussing medical conditions, treatments, and pharmaceuticals.',
        'Clinical Research Reports: Writing research papers, studies, and case reports in a professional, scientific tone.',
        'Patient Communication: Improving communication with patients, families, and healthcare teams, focusing on empathy and clarity.',
        'Pharmaceutical Sales: Language for discussing drugs, clinical trials, and working with doctors, hospitals, and suppliers.',
        'Compliance & Regulations: Understanding and discussing healthcare laws, privacy regulations, and clinical standards.',
      ],
    },
    {
      title: 'Hospitality & Tourism',
      examples: [
        'Customer Service Excellence: Effective communication with clients, resolving complaints, and handling inquiries in a professional manner.',
        'Hotel Management: Vocabulary and phrases used in managing bookings, room assignments, guest services, and operational tasks.',
        'Event Planning: Discussing logistics, venue selection, budgeting, and event execution with clients and vendors.',
        'Tourism & Travel Industry: Language for discussing travel packages, itineraries, accommodations, and customer satisfaction.',
        'Cultural Sensitivity: Communicating respectfully and effectively with clients from diverse cultural backgrounds.',
      ],
    },
    {
      title: 'Information Technology (IT) & Tech',
      examples: [
        'Technical Documentation: Writing user manuals, technical guides, and software documentation clearly and effectively.',
        'IT Support Communication: Providing customer service for technical issues, troubleshooting, and support through email, chat, or phone.',
        'Software Development Vocabulary: Understanding and using terminology related to coding, debugging, project management, and software lifecycle.',
        'Tech Presentations: How to explain technical concepts and innovations to non-technical audiences (e.g., clients, stakeholders).',
        'Cybersecurity & Data Privacy: Discussing protocols, regulations, and security issues in simple, accessible English.',
      ],
    },
    {
      title: 'Legal & Compliance',
      examples: [
        'Legal Writing: Crafting contracts, terms and conditions, memorandums, and other legal documents in clear and concise language.',
        'Negotiation and Dispute Resolution: Using the right language during legal negotiations, settlements, or dispute resolution processes.',
        'Legal Terminology: Mastering the key terms and expressions used in contracts, torts, intellectual property, and international law.',
        'Compliance Communication: Writing compliance reports, understanding industry regulations, and discussing ethical practices.',
        'Courtroom English: Language used in courtrooms, including questioning, presenting evidence, and cross-examinations.',
      ],
    },
    {
      title: 'Manufacturing & Engineering',
      examples: [
        'Technical Specifications: Writing and understanding technical product specifications, blueprints, and diagrams.',
        'Quality Assurance & Control: Communicating processes, standards, and procedures for maintaining product quality.',
        'Safety Protocols: Discussing workplace safety standards, hazard communication, and emergency procedures.',
        'Supply Chain & Logistics: Terminology for discussing inventory management, procurement, transportation, and warehouse operations.',
        'Project Management: Vocabulary and communication skills related to project planning, deadlines, and team collaboration in an engineering context.',
      ],
    },
    {
      title: 'Retail & E-Commerce',
      examples: [
        'Customer Interaction: Key phrases for engaging with customers, handling queries, and addressing complaints in both retail and online settings.',
        'Sales Strategies: Discussing upselling, cross-selling, and promoting new products effectively to boost sales.',
        'Inventory Management: Using accurate language for stock levels, order fulfillment, and logistics management.',
        'Online Transactions: Handling transactions, online payments, and e-commerce policies effectively in customer communications.',
        'Brand Marketing: Phrasing for creating advertisements, loyalty programs, and promotions for retail clients.',
      ],
    },
    {
      title: 'Human Resources (HR)',
      examples: [
        'Recruitment and Interviewing: Effective communication during recruitment processes, including job descriptions, interviews, and onboarding.',
        'Employee Relations: Vocabulary for discussing workplace issues, performance reviews, and conflict resolution.',
        'Training and Development: Crafting training materials, presenting workshops, and coaching employees.',
        'Workplace Policies: Writing and explaining workplace policies, benefits, and procedures.',
        'Legal Compliance in HR: Language used in discussing labor laws, employee rights, and organizational compliance.',
      ],
    },
    {
      title: 'Real Estate',
      examples: [
        'Property Listings: Writing compelling property descriptions, sales brochures, and advertisements.',
        'Sales Negotiations: Key phrases for negotiating prices, terms, and conditions between buyers and sellers.',
        'Contracts and Agreements: Understanding and using the language of real estate contracts, leases, and property documents.',
        'Client Communication: Correspondence with clients, addressing queries, and setting appointments.',
        'Market Analysis: Vocabulary for discussing real estate trends, market data, and property valuation.',
      ],
    },
  ];

  return (
    <PageWrapper>
        {/* Main Page Title */}
        <Title>Corporate Courses</Title>

        {/* Introductory Section */}
        <Section>
            <Paragraph>
            Unlock the full potential of your team with tailored Corporate Business English courses. 
            Designed to enhance communication skills in a global business environment, my programs focus on the language and soft skills necessary for success in the workplace.
            From emails and presentations to negotiations and leadership, my courses offer practical training that empowers employees at all levels to communicate confidently and professionally in English.
            </Paragraph>
        </Section>

        {/* Key Features Section */}
        <Section>
            <Subtitle>Key Features</Subtitle>
            <List>
                <ListItem>
                    <strong>Customizable Content:</strong> Courses can be tailored to meet the specific needs of your industry or organization, ensuring relevant learning outcomes.
                </ListItem>
                <ListItem>
                    <strong>Flexible Learning Formats:</strong> Choose from in-person training, online sessions, or blended learning options for maximum convenience.
                </ListItem>
                <ListItem>
                    <strong>Practical Skills:</strong> Focused on real-world scenarios, including business writing, meetings, report generation, customer service, and cross-cultural communication.
                </ListItem>
                <ListItem>
                    <strong>Progressive Learning:</strong> Structured to cater to various proficiency levels, from beginner to advanced, with measurable progress through the course.
                </ListItem>
            </List>
        </Section>
        
        {/* Example Industry-Specific Courses */}
        <Section>
            <Subtitle>Example Industry-Specific Courses</Subtitle>
            {industries.map((industry) => (
                <ExpandableSection key={industry.title}>
                <Header onClick={() => toggleSection(industry.title)}>
                    {industry.title}
                    <Arrow isOpen={openSection === industry.title}>&#8250;</Arrow>
                </Header>
                <Content isOpen={openSection === industry.title}>
                    <ExampleList>
                    {industry.examples.map((example, idx) => (
                        <ExampleItem key={idx}>{example}</ExampleItem>
                    ))}
                    </ExampleList>
                </Content>
                </ExpandableSection>
            ))}
        </Section>
    </PageWrapper>
  );
}
