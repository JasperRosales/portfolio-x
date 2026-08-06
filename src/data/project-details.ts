import type { Project } from "./projects";

type ProjectTitle = Project["title"];

export interface ProjectImageDetail {
  imageSrc: string;
  imageAlt: string;
  imageDescription: string;
}

export interface ProjectDetail {
  imageGallery: ProjectImageDetail[];
}

export const projectDetails: Partial<Record<ProjectTitle, ProjectDetail>> = {
  SmartWardrobe: {
    imageGallery: [
      {
        imageSrc: "/projects/smartwardrobe/sw_preview.png",
        imageAlt: "SmartWardrobe preview",
        imageDescription:
          "Landing Page of SmartWardrobe, showcasing its sleek design and user-friendly interface. The image highlights the app's core features, including outfit recommendations and wardrobe organization tools.",
      },
      {
        imageSrc: "/projects/smartwardrobe/sw_login.png",
        imageAlt: "SmartWardrobe login",
        imageDescription:
          "Login Page of SmartWardrobe, demonstrating the secure and intuitive authentication process with Google Authentication and Jwt Tokenization. The design emphasizes ease of access while maintaining user privacy and data security.",
      },
      {
        imageSrc: "/projects/smartwardrobe/sw_int.png",
        imageAlt: "SmartWardrobe interface",
        imageDescription:
          "The Main Interface of SmartWardrobe, showcasing the app's core features such as outfit recommendations, wardrobe organization tools, and user-friendly navigation. The interface is designed to provide a seamless and enjoyable user experience, making it easy for users to manage their wardrobe and discover new outfit ideas.",
      },
      {
        imageSrc: "/projects/smartwardrobe/sw_add.png",
        imageAlt: "SmartWardrobe add",
        imageDescription:
          "The Add Item Page of SmartWardrobe, allowing users to easily add new clothing items or to use the camera of their mobile device to upload catalogs or models to their virtual wardrobe. The page features a simple option to upload a photo of the item or the model",
      },
      {
        imageSrc: "/projects/smartwardrobe/sw_reco.png",
        imageAlt: "SmartWardrobe recommendation",
        imageDescription:
          "The Outfit Recommendation Page of SmartWardrobe, showcasing the app's core feature of providing personalized outfit suggestions based on the user's wardrobe and preferences. The page displays a curated selection of outfits, complete with options to save in the catalog or to try it on",
      },
      {
        imageSrc: "/projects/smartwardrobe/sw_acc.png",
        imageAlt: "SmartWardrobe account",
        imageDescription:
          "The Account Page of SmartWardrobe, allowing users to manage their profile information, settings, and preferences. The page features a simple option to update their personal details or delete their account, change password, and logout.",
      },
    ],
  },
  Astrix: {
    imageGallery: [
      {
        imageSrc: "/projects/astrix/ghost.svg",
        imageAlt: "Astrix preview",
        imageDescription:
          "Add your Astrix screenshot and update this text to describe what the user is seeing.",
      },
    ],
  },
  "Portfolio Y": {
    imageGallery: [
      {
        imageSrc: "/projects/portfolio-y/py_hero.png",
        imageAlt: "Portfolio Y Hero",
        imageDescription:
          "The hero section of Portfolio Y, showcasing the designer's work and skills in a minimalist and visually appealing layout.",
      },
      {
        imageSrc: "/projects/portfolio-y/py_project.png",
        imageAlt: "Portfolio Y Projects",
        imageDescription:
          "The projects section of Portfolio Y, highlighting the designer's portfolio with clean aesthetics and intuitive navigation to effectively present their work and creative process.",
      },
      {
        imageSrc: "/projects/portfolio-y/py-sample.png",
        imageAlt: "Portfolio Y Sample",
        imageDescription:
          "A sample view of Portfolio Y, demonstrating the designer's approach to presenting their work and creative process.",
      },
      {
        imageSrc: "/projects/portfolio-y/py_exp.png",
        imageAlt: "Portfolio Y Experience",
        imageDescription:
          "The experience section of Portfolio Y, showcasing the designer's professional background and key achievements in a clear and engaging manner.",
      },
    ],
  },
  GasNet: {
    imageGallery: [
      {
        imageSrc: "/projects/gasnet/gn_auth.png",
        imageAlt: "GasNet preview",
        imageDescription:
          "The Authentication Page of GasNet, demonstrating the secure and intuitive authentication process with Google Authentication and Jwt Tokenization. The design emphasizes ease of access while maintaining user privacy and data security.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_home.png",
        imageAlt: "GasNet homepage",
        imageDescription:
          "The Admin Home Page of GasNet, showcasing the dashboard for administrators to access key metrics. The design focuses on providing a clear and efficient interface for administrative tasks.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_analytics.png",
        imageAlt: "GasNet analytics",
        imageDescription:
          "The Admin Analytics Page of GasNet, showcasing detailed reports and insights for administrators. The design focuses on providing a clear and efficient interface for analyzing key metrics.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_analytics_2.png",
        imageAlt: "GasNet analytics_2",
        imageDescription:
          "A secondary analytics dashboard view in GasNet featuring visual data summaries, transaction monitoring, and performance tracking tools that support informed administrative decision-making.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data.png",
        imageAlt: "GasNet stock inventory",
        imageDescription:
          "The Stock Inventory Section of GasNet provides administrators with a centralized overview of available LPG supplies, cylinder quantities, and inventory status to support accurate stock monitoring and management.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data_2.png",
        imageAlt: "GasNet deliverables list",
        imageDescription:
          "The Deliverables List Section of GasNet allows administrators to monitor scheduled and completed deliveries, helping streamline order tracking and operational coordination.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data_3.png",
        imageAlt: "GasNet returned cylinders",
        imageDescription:
          "The Returned Cylinders Section of GasNet is designed to track returned LPG cylinders efficiently, ensuring accurate records of exchanges, returns, and inventory circulation.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_report.png",
        imageAlt: "GasNet reports",
        imageDescription:
          "The Reports Section of GasNet presents comprehensive weekly, monthly, and annual analytics, enabling administrators to evaluate business performance, monitor trends, and generate data-driven insights.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_translist.png",
        imageAlt: "GasNet transaction list",
        imageDescription:
          "The Transaction List Page of GasNet provides administrators with a detailed overview of all transactions, allowing for easy tracking and management of financial activities.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_manage.png",
        imageAlt: "GasNet management",
        imageDescription:
          "The Management Section of GasNet provides administrators with tools to oversee and control various aspects of the system, ensuring smooth operations and effective resource allocation.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_manage_edit.png",
        imageAlt: "GasNet management edit modal",
        imageDescription:
          "The Edit Modal in GasNet's Management Section allows administrators to efficiently update and manage system settings, user information, and operational parameters through a user-friendly interface.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_home.png",
        imageAlt: "GasNet staff pos home",
        imageDescription:
          "The Staff POS Home Page of GasNet, showcasing the point-of-sale interface for staff members to process transactions and manage sales efficiently. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_reciept.png",
        imageAlt: "GasNet staff pos receipt",
        imageDescription:
          "The Staff POS Receipt Page of GasNet, showcasing the detailed receipt interface for staff members to view and print transaction receipts. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_translist.png",
        imageAlt: "GasNet staff pos transaction list",
        imageDescription:
          "The Staff POS Transaction List Page of GasNet, showcasing the detailed list of transactions for staff members to view and manage. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
    ],
  },
  "CICS Community": {
    imageGallery: [
      {
        imageSrc: "/projects/cics-community/hero.png",
        imageAlt: "CICS Community hero",
        imageDescription:
          "The hero section of the CICS Community platform, introducing the community GitHub for students and future members with a welcoming layout and clear call to action.",
      },
      {
        imageSrc: "/projects/cics-community/about.png",
        imageAlt: "CICS Community about",
        imageDescription:
          "The about section of the CICS Community platform, explaining the initiative to enhance and supply knowledge for students and professors through distributed source management and documentation.",
      },
      {
        imageSrc: "/projects/cics-community/acad-program.png",
        imageAlt: "CICS Community academic program",
        imageDescription:
          "The academic program section of the CICS Community platform, outlining the educational offerings and training programs available to members.",
      },
      {
        imageSrc: "/projects/cics-community/announcement.png",
        imageAlt: "CICS Community announcement",
        imageDescription:
          "The announcement section of the CICS Community platform, keeping members informed of the latest updates, events, and community news.",
      },
      {
        imageSrc: "/projects/cics-community/call-card-to-fb-mail.png",
        imageAlt: "CICS Community contact card",
        imageDescription:
          "A contact card in the CICS Community platform, providing ways for visitors to connect through Facebook and email.",
      },
      {
        imageSrc: "/projects/cics-community/contributors.png",
        imageAlt: "CICS Community contributors",
        imageDescription:
          "The contributors section of the CICS Community platform, recognizing the members and co-officers who help maintain and grow the community.",
      },
      {
        imageSrc: "/projects/cics-community/github-repo.png",
        imageAlt: "CICS Community GitHub repository",
        imageDescription:
          "The GitHub repository view of the CICS Community platform, showcasing the hosted documentation and source management resources for members.",
      },
      {
        imageSrc: "/projects/cics-community/officers.png",
        imageAlt: "CICS Community officers",
        imageDescription:
          "The officers section of the CICS Community platform, introducing the team of co-officers leading the community's knowledge-sharing initiatives.",
      },
      {
        imageSrc: "/projects/cics-community/projects.png",
        imageAlt: "CICS Community projects",
        imageDescription:
          "The projects section of the CICS Community platform, highlighting the collaborative projects and repositories maintained by the community.",
      },
      {
        imageSrc: "/projects/cics-community/repos.png",
        imageAlt: "CICS Community repositories",
        imageDescription:
          "The repositories listing of the CICS Community platform, giving members an overview of the available repositories and documentation.",
      },
      {
        imageSrc: "/projects/cics-community/services.png",
        imageAlt: "CICS Community services",
        imageDescription:
          "The services section of the CICS Community platform, describing the resources and support offered to students, professors, and future members.",
      },
    ],
  },
  "CICS Digital Showcase": {
    imageGallery: [
      {
        imageSrc: "/projects/digital-showcase/home.png",
        imageAlt: "CICS Digital Showcase home",
        imageDescription:
          "The home page of the CICS Digital Showcase, presenting student projects and achievements in a clean and organized layout.",
      },
      {
        imageSrc: "/projects/digital-showcase/about.png",
        imageAlt: "CICS Digital Showcase about",
        imageDescription:
          "The about section of the CICS Digital Showcase, explaining the purpose of the platform as a digital portfolio for students to present their work and foster recognition.",
      },
      {
        imageSrc: "/projects/digital-showcase/code-example.png",
        imageAlt: "CICS Digital Showcase code example",
        imageDescription:
          "A code example shown in the CICS Digital Showcase, demonstrating best practices in source management and documentation for students.",
      },
      {
        imageSrc: "/projects/digital-showcase/git-commands.png",
        imageAlt: "CICS Digital Showcase git commands",
        imageDescription:
          "A git commands reference in the CICS Digital Showcase, providing students with practical guidance for distributed source management.",
      },
      {
        imageSrc: "/projects/digital-showcase/how-to-contribute.png",
        imageAlt: "CICS Digital Showcase how to contribute",
        imageDescription:
          "The how-to-contribute section of the CICS Digital Showcase, guiding students and future members on how to share and contribute their projects.",
      },
    ],
  },
  "Fit Tech Client": {
    imageGallery: [
      {
        imageSrc: "/projects/fit-tech-client/overview.png",
        imageAlt: "Fit Tech Client overview",
        imageDescription:
          "The overview of Fit Tech Client, showcasing the virtual try-on interface for fitting clothes and exploring outfit combinations.",
      },
      {
        imageSrc: "/projects/fit-tech-client/demo.png",
        imageAlt: "Fit Tech Client demo",
        imageDescription:
          "A demo view of Fit Tech Client, demonstrating how users can try on clothing virtually and explore different outfit combinations.",
      },
      {
        imageSrc: "/projects/fit-tech-client/uploading-photo.png",
        imageAlt: "Fit Tech Client uploading photo",
        imageDescription:
          "The photo upload flow of Fit Tech Client, allowing users to submit clothing images or model photos to the virtual fitting experience.",
      },
      {
        imageSrc: "/projects/fit-tech-client/export.png",
        imageAlt: "Fit Tech Client export",
        imageDescription:
          "The export view of Fit Tech Client, letting users save or share their fitted outfit results.",
      },
    ],
  },
  "Invoice Generator": {
    imageGallery: [
      {
        imageSrc: "/projects/invoice-generator/overview.png",
        imageAlt: "Invoice Generator overview",
        imageDescription:
          "The overview of Invoice Generator, showcasing the dashboard for creating, managing, and exporting professional invoices.",
      },
      {
        imageSrc: "/projects/invoice-generator/company-card.png",
        imageAlt: "Invoice Generator company card",
        imageDescription:
          "The company details card of Invoice Generator, where users can set up their business information for billing workflows.",
      },
      {
        imageSrc: "/projects/invoice-generator/client-card.png",
        imageAlt: "Invoice Generator client card",
        imageDescription:
          "The client card of Invoice Generator, allowing users to manage and store client and billing records.",
      },
      {
        imageSrc: "/projects/invoice-generator/item-card.png",
        imageAlt: "Invoice Generator item card",
        imageDescription:
          "The item card of Invoice Generator, where users can add line items, quantities, and pricing to an invoice.",
      },
      {
        imageSrc: "/projects/invoice-generator/invoice-card.png",
        imageAlt: "Invoice Generator invoice card",
        imageDescription:
          "The invoice card of Invoice Generator, presenting a structured professional invoice layout ready for review and export.",
      },
      {
        imageSrc: "/projects/invoice-generator/theme-selector.png",
        imageAlt: "Invoice Generator theme selector",
        imageDescription:
          "The theme selector of Invoice Generator, letting users customize the visual style of their invoices.",
      },
    ],
  },
  "Protect The Baby": {
    imageGallery: [
      {
        imageSrc: "/projects/protect-the-baby/start-game.png",
        imageAlt: "Protect The Baby start game",
        imageDescription:
          "The start screen of Protect The Baby, introducing the 2D arcade survival game where players defend Baby Shark from incoming threats.",
      },
      {
        imageSrc: "/projects/protect-the-baby/demo-play.png",
        imageAlt: "Protect The Baby gameplay",
        imageDescription:
          "A gameplay demo of Protect The Baby, showing the arcade-style survival action and responsive controls in motion.",
      },
      {
        imageSrc: "/projects/protect-the-baby/level-selection.png",
        imageAlt: "Protect The Baby level selection",
        imageDescription:
          "The level selection screen of Protect The Baby, allowing players to choose their desired challenge.",
      },
      {
        imageSrc: "/projects/protect-the-baby/other-levels.png",
        imageAlt: "Protect The Baby other levels",
        imageDescription:
          "The other levels view of Protect The Baby, showcasing additional stages and increasing difficulty options.",
      },
      {
        imageSrc: "/projects/protect-the-baby/spawn-point-and-sharks.png",
        imageAlt: "Protect The Baby spawn point and sharks",
        imageDescription:
          "A gameplay view of Protect The Baby highlighting the spawn point and incoming shark threats that players must fend off.",
      },
      {
        imageSrc: "/projects/protect-the-baby/completed-level-card.png",
        imageAlt: "Protect The Baby completed level card",
        imageDescription:
          "The completed level card of Protect The Baby, summarizing the player's performance after finishing a stage.",
      },
    ],
  },
  "Resume Analyzer": {
    imageGallery: [
      {
        imageSrc: "/projects/resume-analyzer/overview.png",
        imageAlt: "Resume Analyzer overview",
        imageDescription:
          "The overview of Resume Analyzer, showcasing the AI-powered tool for evaluating resumes against job descriptions.",
      },
      {
        imageSrc: "/projects/resume-analyzer/input-card.png",
        imageAlt: "Resume Analyzer input card",
        imageDescription:
          "The input card of Resume Analyzer, where users submit their resume and target job description for analysis.",
      },
      {
        imageSrc: "/projects/resume-analyzer/analysis-output.png",
        imageAlt: "Resume Analyzer analysis output",
        imageDescription:
          "The analysis output of Resume Analyzer, presenting ATS compatibility insights and role-specific skill gap detection.",
      },
      {
        imageSrc: "/projects/resume-analyzer/sample-analysis.png",
        imageAlt: "Resume Analyzer sample analysis",
        imageDescription:
          "A sample analysis result in Resume Analyzer, demonstrating actionable recommendations to improve candidate alignment with target roles.",
      },
    ],
  },
  "CV Builder": {
    imageGallery: [
      {
        imageSrc: "/projects/cv-builder/overview.png",
        imageAlt: "CV Builder overview",
        imageDescription:
          "The overview of CV Builder, showcasing the modern ATS-friendly CV builder with live editing and export capabilities.",
      },
      {
        imageSrc: "/projects/cv-builder/full-showcase.png",
        imageAlt: "CV Builder full showcase",
        imageDescription:
          "A full showcase of CV Builder, displaying the complete document structure and polished layout of the generated CV.",
      },
      {
        imageSrc: "/projects/cv-builder/flex-demo-input.png",
        imageAlt: "CV Builder flex demo input",
        imageDescription:
          "The input view of CV Builder, demonstrating the flexible form for entering personal, experience, and education details.",
      },
      {
        imageSrc: "/projects/cv-builder/adding-info.png",
        imageAlt: "CV Builder adding info",
        imageDescription:
          "The adding info flow of CV Builder, showing how users build out their CV content in real time.",
      },
      {
        imageSrc: "/projects/cv-builder/result-sample.png",
        imageAlt: "CV Builder result sample",
        imageDescription:
          "A result sample from CV Builder, presenting an ATS-friendly CV layout ready for review.",
      },
      {
        imageSrc: "/projects/cv-builder/exporting-cv.png",
        imageAlt: "CV Builder exporting cv",
        imageDescription:
          "The exporting flow of CV Builder, demonstrating how users export their CV to PDF.",
      },
    ],
  },
};
