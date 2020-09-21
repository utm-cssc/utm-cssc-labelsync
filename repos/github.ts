import { repo, label } from "label-sync";

/**
 * Default collection of label in a Github repository.
 */
export const github = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [
    label({
      name: "Priority: Low",
      color: "#8bc34a",
      description: "This issue can wait, and can probably be picked up by anyone looking to contribute to the project.",
    }),
    label({
      name: "Priority: Medium",
      color: "#fbca04",
      description: "This issue is useful, and needs some attention.",
    }),
    label({
      name: "Priority: High",
      color: "#bf360c",
      description: "After critical issues are fixed, these should be dealt with before any further issues.",
    }),
    label({
      name: "Priority: Critical",
      color: "#E11E20",
      description: "This should be dealt with ASAP. Not fixing this issue would be a serious error.",
    }),
    label({
      name: "Domain: Config",
      color: "#b56edd",
      description: "This issue is related to configuration changes.",
    }),
    label({
      name: "Domain: Dev Experience",
      color: "#00bcd4",
      description: "This issue pertains to a developer's emotions and attitudes when building Grey Software.",
    }),
    label({
      name: "Domain: User Experience",
      color: "#03a9f4",
      description: "This issue pertains to a developer's emotions and attitudes when building Grey Software.",
    }),
    label({
      name: "Domain: Monetization",
      color: "#fbca04",
      description: "An issue that pertains to monetizing the project through mediums such as ads or purchases.",
    }),
    label({
      name: "Domain: Config",
      color: "#b56edd",
      description: "This issue is related to configuration changes.",
    }),
    label({
      name: "Domain: Documentation",
      color: "#514fe2",
      description: "An issue that seeks clarification, and would be helpful to have answered on the docs.",
    }),
    label({
      name: "Domain: Legal",
      color: "#6447e5",
      description: "This issue deals with licensing, regulations, and other legal matters.",
    }),
    label({
      name: "Domain: Marketing",
      color: "#7d64c4",
      description: "This issue pertains to increasing the awareness for this project.",
    }),
    label({
      name: "Domain: Performance",
      color: "#ff9800",
      description: "This issue is about monitoring or improving the performance of Grey Software.",
    }),
    label({
      name: "Domain: Security",
      color: "#3d5afe",
      description: "This issue pertains to identifying vulnerabilities in and improving the security of Grey Software.",
    }),
    label({
      name: "Domain: Dependencies",
      color: "#3d5afe",
      description: "This issue pertains to the libraries and binaries that this project depends on.",
      alias: ['dependencies'],
    }),
    label({
      name: "Domain: Finances",
      color: "#0d47a1",
      description: "This issue pertains to the libraries and binaries that this project depends on.",
    }),
    label({
      name: "Domain: Organization",
      color: "#3d5afe",
      description: "This issue pertains to the libraries and binaries that this project depends on.",
    }),
    label({
      name: "Domain: Testing",
      color: "#f06292",
      description: "This issue is about assuring the quality of the project through testing.",
    }),
    label({
      name: "Domain: Tooling",
      color: "#006b75",
      description: "This issue focuses on the build system, linting, test tooling, etc.",
    }),
    label({
      name: "Role: Product Owner",
      color: "#006b75",
      description: "Uses PM tools to execute the vision they co-create with the Designers, Engineers, and Users.",
    }),
    label({
      name: "Role: Software Engineer",
      color: "#35bf4c",
      description: "Uses technology to design, develop, test, and maintain creative software solutions.",
    }),
    label({
      name: "Role: UI Designer",
      color: "#fbca04",
      description: "Designs creative interfaces that make a user`s interaction as simple as possible.",
    }),
    label({
      name: "Role: UX Designer",
      color: "#70dd02",
      description: "Enhances user experience by improving the usability, ease of use and pleasure of the application.",
    }),
    label({
      name: "Role: Operations",
      color: "#795548",
      description: "Manages the operations of the organizations!",
    }),
    label({
      name: "Role: Maintainer",
      color: "#795548",
      description: "Manages the repository by organizing issues, milestones, projects and new contributors.",
    }),
    label({
      name: "Status: Blocked",
      color: "#795548",
      description: "This issue is blocked by another unresolved issue.",
    }),
    label({
      name: "Status: In Discussion",
      color: "#455a64",
      description: "This issue has an ongoing discussion that hasn't reached a consensus. Please contribute!",
    }),
    label({
      name: "Status: Revisit",
      color: "#7d64c4",
      description: "This issue will be revisited in the future!",
    }),
    label({
      name: "Type: Bug",
      color: "#e11d21",
      description: "An issue that causes problems for users and developers.",
    }),
    label({
      name: "Type: Enhancement",
      color: "#0d47a1",
      description: "An issue that adds new feature or technology.",
    }),
    label({
      name: "Type: Maintenance",
      color: "#0d47a1",
      description: "An issue that make things clearer or removes ambiguity without changing base functionality.",
    })

  ],
});
