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
};
