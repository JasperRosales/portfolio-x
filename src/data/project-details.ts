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
        imageSrc: "/sw_preview.png",
        imageAlt: "SmartWardrobe preview",
        imageDescription:
          "Landing Page of SmartWardrobe, showcasing its sleek design and user-friendly interface. The image highlights the app's core features, including outfit recommendations and wardrobe organization tools.",
      },
      {
        imageSrc: "/sw_login.png",
        imageAlt: "SmartWardrobe login",
        imageDescription:
          "Login Page of SmartWardrobe, demonstrating the secure and intuitive authentication process with Google Authentication and Jwt Tokenization. The design emphasizes ease of access while maintaining user privacy and data security.",
      },
      {
        imageSrc: "/sw_int.png",
        imageAlt: "SmartWardrobe interface",
        imageDescription:
          "The Main Interface of SmartWardrobe, showcasing the app's core features such as outfit recommendations, wardrobe organization tools, and user-friendly navigation. The interface is designed to provide a seamless and enjoyable user experience, making it easy for users to manage their wardrobe and discover new outfit ideas.",
      },
      {
        imageSrc: "/sw_add.png",
        imageAlt: "SmartWardrobe add",
        imageDescription:
          "The Add Item Page of SmartWardrobe, allowing users to easily add new clothing items or to use the camera of their mobile device to upload catalogs or models to their virtual wardrobe. The page features a simple option to upload a photo of the item or the model",
      },
      {
        imageSrc: "/sw_reco.png",
        imageAlt: "SmartWardrobe recommendation",
        imageDescription:
          "The Outfit Recommendation Page of SmartWardrobe, showcasing the app's core feature of providing personalized outfit suggestions based on the user's wardrobe and preferences. The page displays a curated selection of outfits, complete with options to save in the catalog or to try it on",
      },
      {
        imageSrc: "/sw_acc.png",
        imageAlt: "SmartWardrobe account",
        imageDescription:
          "The Account Page of SmartWardrobe, allowing users to manage their profile information, settings, and preferences. The page features a simple option to update their personal details or delete their account, change password, and logout.",
      },
    ],
  },
  Astrix: {
    imageGallery: [
      {
        imageSrc: "/ghost.svg",
        imageAlt: "Astrix preview",
        imageDescription:
          "Add your Astrix screenshot and update this text to describe what the user is seeing.",
      },
    ],
  },
  "Portfolio Y": {
    imageGallery: [
      {
        imageSrc: "/py_hero.png",
        imageAlt: "Portfolio Y Hero",
        imageDescription:
          "The hero section of Portfolio Y, showcasing the designer's work and skills in a minimalist and visually appealing layout.",
      },
      {
        imageSrc: "/py_project.png",
        imageAlt: "Portfolio Y Projects",
        imageDescription:
          "The projects section of Portfolio Y, highlighting the designer's portfolio with clean aesthetics and intuitive navigation to effectively present their work and creative process.",
      },
      {
        imageSrc: "/py_sample.png",
        imageAlt: "Portfolio Y Sample",
        imageDescription:
          "A sample view of Portfolio Y, demonstrating the designer's approach to presenting their work and creative process.",
      },
      {
        imageSrc: "/py_exp.png",
        imageAlt: "Portfolio Y Experience",
        imageDescription:
          "The experience section of Portfolio Y, showcasing the designer's professional background and key achievements in a clear and engaging manner.",
      },
    ],
  },
  GasNet: {
    imageGallery: [
      {
        imageSrc: "/gn_auth.png",
        imageAlt: "GasNet preview",
        imageDescription:
          "The Authentication Page of GasNet, demonstrating the secure and intuitive authentication process with Google Authentication and Jwt Tokenization. The design emphasizes ease of access while maintaining user privacy and data security.",
      },
      {
        imageSrc: "/gn_admin_home.png",
        imageAlt: "GasNet homepage",
        imageDescription:
          "The Admin Home Page of GasNet, showcasing the dashboard for administrators to access key metrics. The design focuses on providing a clear and efficient interface for administrative tasks.",
      },
      {
        imageSrc: "/gn_admin_analytics.png",
        imageAlt: "GasNet analytics",
        imageDescription:
          "The Admin Analytics Page of GasNet, showcasing detailed reports and insights for administrators. The design focuses on providing a clear and efficient interface for analyzing key metrics.",
      },
      {
        imageSrc: "/gn_admin_analytics_2.png",
        imageAlt: "GasNet analytics_2",
        imageDescription:
          "A secondary analytics dashboard view in GasNet featuring visual data summaries, transaction monitoring, and performance tracking tools that support informed administrative decision-making.",
      },
      {
        imageSrc: "/gn_admin_data.png",
        imageAlt: "GasNet stock inventory",
        imageDescription:
          "The Stock Inventory Section of GasNet provides administrators with a centralized overview of available LPG supplies, cylinder quantities, and inventory status to support accurate stock monitoring and management.",
      },
      {
        imageSrc: "/gn_admin_data_2.png",
        imageAlt: "GasNet deliverables list",
        imageDescription:
          "The Deliverables List Section of GasNet allows administrators to monitor scheduled and completed deliveries, helping streamline order tracking and operational coordination.",
      },
      {
        imageSrc: "/gn_admin_data_3.png",
        imageAlt: "GasNet returned cylinders",
        imageDescription:
          "The Returned Cylinders Section of GasNet is designed to track returned LPG cylinders efficiently, ensuring accurate records of exchanges, returns, and inventory circulation.",
      },
      {
        imageSrc: "/gn_admin_report.png",
        imageAlt: "GasNet reports",
        imageDescription:
          "The Reports Section of GasNet presents comprehensive weekly, monthly, and annual analytics, enabling administrators to evaluate business performance, monitor trends, and generate data-driven insights.",
      },
      {
        imageSrc: "/gn_admin_translist.png",
        imageAlt: "GasNet transaction list",
        imageDescription:
          "The Transaction List Page of GasNet provides administrators with a detailed overview of all transactions, allowing for easy tracking and management of financial activities.",
      },
      {
        imageSrc: "/gn_admin_manage.png",
        imageAlt: "GasNet management",
        imageDescription:
          "The Management Section of GasNet provides administrators with tools to oversee and control various aspects of the system, ensuring smooth operations and effective resource allocation.",
      },
      {
        imageSrc: "/gn_admin_manage_edit.png",
        imageAlt: "GasNet management edit modal",
        imageDescription:
          "The Edit Modal in GasNet's Management Section allows administrators to efficiently update and manage system settings, user information, and operational parameters through a user-friendly interface.",
      },
      {
        imageSrc: "/gn_staff_home.png",
        imageAlt: "GasNet staff pos home",
        imageDescription:
          "The Staff POS Home Page of GasNet, showcasing the point-of-sale interface for staff members to process transactions and manage sales efficiently. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/gn_staff_reciept.png",
        imageAlt: "GasNet staff pos receipt",
        imageDescription:
          "The Staff POS Receipt Page of GasNet, showcasing the detailed receipt interface for staff members to view and print transaction receipts. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/gn_staff_translist.png",
        imageAlt: "GasNet staff pos transaction list",
        imageDescription:
          "The Staff POS Transaction List Page of GasNet, showcasing the detailed list of transactions for staff members to view and manage. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
    ],
  },
};
