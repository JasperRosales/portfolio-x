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
  "Script Doctor": {
    imageGallery: [
      {
        imageSrc: "/projects/script-doctor/05_home_ready.webp",
        imageAlt: "Script Doctor home screen",
        imageDescription: "Home screen, ready to scan a handwritten prescription from the camera or photos.",
      },
      {
        imageSrc: "/projects/script-doctor/08_result_top.webp",
        imageAlt: "Script Doctor scan result",
        imageDescription: "A scan result with the overall risk banner, each medication's confidence, and the safety flags it raised.",
      },
      {
        imageSrc: "/projects/script-doctor/10_history.webp",
        imageAlt: "Script Doctor history",
        imageDescription: "Past scans are kept on the device so they can be checked again later.",
      },
    ],
  },
  "Quack Overflow": {
    imageGallery: [
      {
        imageSrc: "/projects/quack-overflow/1-landing.webp",
        imageAlt: "Quack Overflow landing page",
        imageDescription: "The landing page introducing Quack, the duck that only asks questions.",
      },
      {
        imageSrc: "/projects/quack-overflow/2-debug-conversation.webp",
        imageAlt: "Debugging conversation",
        imageDescription: "A debugging session: the code editor on one side and Quack's questions on the other.",
      },
      {
        imageSrc: "/projects/quack-overflow/3-hint-level-3.webp",
        imageAlt: "Hint ladder level 3",
        imageDescription: "At hint level 3 Quack highlights the exact line in the editor, but still never writes the fix.",
      },
      {
        imageSrc: "/projects/quack-overflow/4-journal.webp",
        imageAlt: "Bug journal",
        imageDescription: "The bug journal groups solved bugs by category and points out repeat mistakes.",
      },
    ],
  },
  "Astra": {
    imageGallery: [
      {
        imageSrc: "/projects/astra/desktop-sky.webp",
        imageAlt: "Astra night sky",
        imageDescription: "A sample sky where journal entries form labelled constellations.",
      },
      {
        imageSrc: "/projects/astra/desktop-entry.webp",
        imageAlt: "Astra entry view",
        imageDescription: "Opening a star shows the journal entry behind it.",
      },
      {
        imageSrc: "/projects/astra/desktop-form.webp",
        imageAlt: "Astra new entry form",
        imageDescription: "Writing a new entry: mood sets the colour, importance sets the brightness.",
      },
    ],
  },
  "Flori": {
    imageGallery: [
      {
        imageSrc: "/projects/flori/home.webp",
        imageAlt: "Flori home page",
        imageDescription: "The garden: search 120 flowers by name, colour, or meaning.",
      },
    ],
  },
  GasNet: {
    imageGallery: [
      {
        imageSrc: "/projects/gasnet/gn_auth.webp",
        imageAlt: "GasNet preview",
        imageDescription:
          "The Authentication Page of GasNet, demonstrating the secure and intuitive authentication process with Google Authentication and Jwt Tokenization. The design emphasizes ease of access while maintaining user privacy and data security.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_home.webp",
        imageAlt: "GasNet homepage",
        imageDescription:
          "The Admin Home Page of GasNet, showcasing the dashboard for administrators to access key metrics. The design focuses on providing a clear and efficient interface for administrative tasks.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_analytics.webp",
        imageAlt: "GasNet analytics",
        imageDescription:
          "The Admin Analytics Page of GasNet, showcasing detailed reports and insights for administrators. The design focuses on providing a clear and efficient interface for analyzing key metrics.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_analytics_2.webp",
        imageAlt: "GasNet analytics_2",
        imageDescription:
          "A secondary analytics dashboard view in GasNet featuring visual data summaries, transaction monitoring, and performance tracking tools that support informed administrative decision-making.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data.webp",
        imageAlt: "GasNet stock inventory",
        imageDescription:
          "The Stock Inventory Section of GasNet provides administrators with a centralized overview of available LPG supplies, cylinder quantities, and inventory status to support accurate stock monitoring and management.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data_2.webp",
        imageAlt: "GasNet deliverables list",
        imageDescription:
          "The Deliverables List Section of GasNet allows administrators to monitor scheduled and completed deliveries, helping streamline order tracking and operational coordination.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_data_3.webp",
        imageAlt: "GasNet returned cylinders",
        imageDescription:
          "The Returned Cylinders Section of GasNet is designed to track returned LPG cylinders efficiently, ensuring accurate records of exchanges, returns, and inventory circulation.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_report.webp",
        imageAlt: "GasNet reports",
        imageDescription:
          "The Reports Section of GasNet presents comprehensive weekly, monthly, and annual analytics, enabling administrators to evaluate business performance, monitor trends, and generate data-driven insights.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_translist.webp",
        imageAlt: "GasNet transaction list",
        imageDescription:
          "The Transaction List Page of GasNet provides administrators with a detailed overview of all transactions, allowing for easy tracking and management of financial activities.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_manage.webp",
        imageAlt: "GasNet management",
        imageDescription:
          "The Management Section of GasNet provides administrators with tools to oversee and control various aspects of the system, ensuring smooth operations and effective resource allocation.",
      },
      {
        imageSrc: "/projects/gasnet/gn_admin_manage_edit.webp",
        imageAlt: "GasNet management edit modal",
        imageDescription:
          "The Edit Modal in GasNet's Management Section allows administrators to efficiently update and manage system settings, user information, and operational parameters through a user-friendly interface.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_home.webp",
        imageAlt: "GasNet staff pos home",
        imageDescription:
          "The Staff POS Home Page of GasNet, showcasing the point-of-sale interface for staff members to process transactions and manage sales efficiently. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_reciept.webp",
        imageAlt: "GasNet staff pos receipt",
        imageDescription:
          "The Staff POS Receipt Page of GasNet, showcasing the detailed receipt interface for staff members to view and print transaction receipts. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
      {
        imageSrc: "/projects/gasnet/gn_staff_translist.webp",
        imageAlt: "GasNet staff pos transaction list",
        imageDescription:
          "The Staff POS Transaction List Page of GasNet, showcasing the detailed list of transactions for staff members to view and manage. The design focuses on providing a clear and user-friendly interface for staff operations.",
      },
    ],
  },
  PetPal: {
    imageGallery: [
      {
        imageSrc: "/projects/petpal/home.webp",
        imageAlt: "PetPal home screen",
        imageDescription: "Home: your pet in its pixel world, its level and XP, passive ability, and the evolution path from egg to adult.",
      },
      {
        imageSrc: "/projects/petpal/partner.webp",
        imageAlt: "PetPal partner result",
        imageDescription: "After a 30-question personality quiz, PetPal picks your partner pet and shows how well it matches you.",
      },
      {
        imageSrc: "/projects/petpal/pets.webp",
        imageAlt: "PetPal pets collection",
        imageDescription: "Your pet collection, with new pets unlocked by walking.",
      },
      {
        imageSrc: "/projects/petpal/battle.webp",
        imageAlt: "PetPal battle modes",
        imageDescription: "Battle modes: boss events, online ranked, 1v1, teams, free-for-all and raids, plus local play over hotspot or Wi-Fi.",
      },
    ],
  },
  Isha: {
    imageGallery: [
      {
        imageSrc: "/projects/isha/home.webp",
        imageAlt: "Isha chat home",
        imageDescription: "The chat home, with quick prompts for your budget, daily briefing, email, calendar, reminders and Classroom.",
      },
      {
        imageSrc: "/projects/isha/menu.webp",
        imageAlt: "Isha navigation menu",
        imageDescription: "Inbox, Classroom deadlines, practice exams, mail digest and budget, with an approval switch for actions.",
      },
      {
        imageSrc: "/projects/isha/offline-brain.webp",
        imageAlt: "Isha offline brain settings",
        imageDescription: "Offline brain: pick automatic, always online or always offline, and download on-device models like Qwen 2.5 and Gemma 3.",
      },
    ],
  },
  Cann: {
    imageGallery: [
      {
        imageSrc: "/projects/cann/flow-editor.webp",
        imageAlt: "Cann flow editor",
        imageDescription: "The flow editor: a schedule trigger followed by app actions, here a daily agenda sent from Google Calendar through Gmail.",
      },
      {
        imageSrc: "/projects/cann/templates.webp",
        imageAlt: "Cann flow templates",
        imageDescription: "Ready-made templates to start from, each showing the apps it connects and when it runs.",
      },
    ],
  },
};
