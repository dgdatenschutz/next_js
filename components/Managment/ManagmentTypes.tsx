type ISOContent = {
  intro: string;
  list: string[];
  proof: string[];
  additionalInfo: string;
  dynamicHeading?: string; 
};

type ISOData = {
  content: ISOContent;
  buttonTitle: string;
};

type ISODataMap = {
  [key: string]: ISOData;
};

export const isoData: ISODataMap = {
  iso9001: {
    content: {
      intro: "Originally, the ISO 9001 standard was issued in 1987. In September 2015, the latest edition of ISO 9001 was published. ISO 9001 is a global standard that outlines the requirements for a quality management system (QMS) and is used by companies to show that they can consistently deliver products and services that fulfill consumer and regulatory criteria. It is the most widely used standard in the ISO 9000 series, as well as the only one that organizations can certify for.ISO 9001:2015 is applicable to all businesses, regardless of their size or sector. All ISO 9001-certified businesses are advised to upgrade to ISO 9001:2015, which aids organizations of all sorts and sizes in managing operations, improving system performance, and developing steadily.ISO 9001 is a process-oriented method to record and assess the organization, its duties, and practices intended to accomplish successful product quality in the company. It is centered around the plan-do-check-act strategy. Many subjects are covered in detail in certain parts of the standard, including:",
      list: [
        "Documentation, scheduling, and defining process relationships",
        "Management duties",
        "Utilization of resources...",
        "The process of setting up the business...",
        "Performance reviews, proposed mitigation action..."
      ],
      proof: [
        "It implements the ISO 9001 standard criteria",
        "It satisfies user needs, along with legislative and regulatory obligations",
        "It coordinates and categorizes documentation."
      ],
      additionalInfo: "Companies have found that implementing ISO 9001, which sets the principles for a successful quality management process, has enabled them to establish a fruitful quality management system, elevate satisfaction among clients, administration, and personnel and optimize their operations on a constant basis. You will get a strategic upper hand and boost your market entrance prospects by obtaining this certification for your quality management process. Certification provides your consumers and business collaborators with a significant ruling tool while creating a powerful customer focus. You may also enhance your company's procedures and structures to increase efficiency. This helps you to save a lot of money while also lowering your litigation risk. Employee productivity is also boosted as a result of improved interaction and more easily accessible data. We assess and certify the quality management system of your organization in accordance with your specific needs. Our specialists have a wealth of expertise and have completed countless successful projects.",
    },
    buttonTitle: "ISO9001",
  },
  iso14001: {
    content: {
      intro: "The ISO 14001 is the world-renowned Environmental Management System Standard. It is a useful approach for monitoring environmental obligations in the company. Water and sewer issues, waste disposal, air quality and smog, mitigating and adapting to climate change, chemical spills, resource allocation and optimization are all examples of this. It relates to the environmental factors of your operations, goods, and solutions, and is applicable across all organizations, irrespective of size, kind, or character.Every five years, ISO standards are assessed and, when required, amended to continue to stay helpful and applicable in today's pace with the fast economic environment. ISO 14001 was updated to reflect current developments and to guarantee compatibility together with the other management systems.Administration, security and organizational change, communications and consciousness are all essential factors. Moreover, you will have to exert more influence and impact over the ecological consequences of product development through each step of the lifespan. This includes procurement of natural resources, designing, manufacturing, transit, usage, cease management, and safe disposal practices.Among the advantages it will provide is the guarantee that environmental management is properly assimilated and linked to your company's corporate goals, putting the ecosystem and continual innovation at the center of the operations. This will be a lot more cost-efficient while also assisting in the preservation of environmental resources.Because of the standardization of its framework, terminologies, and concepts, it is therefore easy to integrate into other management solutions. ",
      list: [],
      proof: [],
      additionalInfo: "The German Certification Body provides ISO 14001 certification services to businesses of all sizes and sectors worldwide.To meet local criteria for joint auditing procedures, our specialists possess foreign and domestic accreditations. Furthermore, our auditors are bound by a specific code of ethics that assures their total impartiality. Besides all that, we will provide you with detailed analyses and reports to assist you on your journey towards prosperity. The certification is a means of signaling to your purchasers, clients, vendors, and other interested parties that you have correctly applied the guideline on standardization criteria verified by an impartial certification organization. Furthermore, for certain businesses, it aids in demonstrating compliance with legal and contractual obligations. Organizations that have achieved ISO 14001 certification have demonstrated their dedication to continual development and decreased environmental consequences. When it comes to public and private green supply chain bids, the certificate can considerably strengthen your negotiation leverage. ISO 14001 accreditation helps your business stand out as a responsible supplier as customers become more conscious of environmental concerns.",
    },
    buttonTitle: "ISO14001",
  },
  iso27001: {
    content: {
      intro: "ISO 27001 specifies the requirements for establishing and maintaining a successful Information Security Management System (ISMS).  The International Organization for Standardization and the International Electrotechnical Commission collaborated to create ISO 27001. The standard was first published in 2005, and then updated in 2013. This worldwide standard applies to all businesses, irrespective of size, kind, or sector. The reason for this is the foundation it offers to properly protect your data, rather than dictating the object that should be secured. Every company that sends, receives, or keeps sensitive information is strongly advised to get ISO 27001 certified.ISO 27001 specifies 114 measures, the majority of which are related to physical, technological, legislative, and administrative safety. The control mechanisms’ aim is to fulfil the criteria specified in the structure. Those measures are protections or solutions that are used to prevent, identify, mitigate, or eliminate security threats.",
      list: [],
      proof: [],
      additionalInfo: "The standard offers businesses the essential understanding of the importance for safeguarding their highly sensitive information and helps companies demonstrate to their clients and stakeholders that their data is secure.People can also obtain an ISO 27001 certificate by taking a course and passing an exam, showcasing their abilities to future employers.ISO 27001 is commonly known as a global standard, which expands commercial prospects for businesses and people.The goal of ISO 27001 is to maintain a corporation's data confidentiality, authenticity, and accessibility. This is accomplished by first determining what possible issues with the data might occur by the means of risk analysis, and afterwards deciding what has to be put in place to stop such incidents from occurring by the means of risk mitigation. As a result, ISO 27001 core concept is based on a risk-management process: discover where the hazards are, and then handle those in accordance with set methods by deploying security measures.We provide an objective audit of the level of compliance in your company's management system (ISMS) according to the ISO 27001 criteria by analyzing the data security and IT infrastructures using ISO 27001.  It outlines the functional specifications and also the paperwork for an ISMS. Privacy concerns will be reduced, and IT security policies can be developed to help you improve the quality of your systems over time.With an ISO 27001 certificate, you can demonstrate to your users and stakeholders that data security is a top concern for you.",
    },
    buttonTitle: "ISO27001",
  },
  iso45001: {
    content: {
      intro: "The ISO 45001 standard for Occupational Health and Safety Management is designed to reduce the risk of injury and diseases in the workplace. The guideline emphasizes proactive employee safety and increased management participation. The standard's structure makes it straightforward to integrate into existing management systems. Irrespective of your sector or business size, ISO 45001 certification will considerably minimize the number of occupational injuries while also satisfying legal and administrative criteria. It is intended to be incorporated into an institution's current organizational operations, and has the same system as other ISO management system standards. Companies can use ISO 45001 to create an Occupational Health & Management System. By creating and executing efficient policy and goals, they are able to manage the OH&S hazards and enhance their organization's productivity. ",
      list: [
        "Minimized accidents in the worksite",
        "Enhanced productivity due to lower absences",
        "More affordable healthcare costs",
        "Establishment of a control environment...",
        "Reaffirmed management willingness...",
        "Improved public perception",
        "Boosted employee morale",
        "Capacity to comply with legal obligations.",
      ],
      additionalInfo: "ISO 45001 suggests a model for increasing working environment safety, reducing worksite hazards, and improving employee welfare and health, allowing a company to elevate its operational efficiency dynamically. Furthermore, it assures global adherence to existing laws. All of these steps used together will help a company develop an image of a “protected workplace”, resulting in an array of advantages ranging from lower healthcare cost to higher staff satisfaction — all while staying on track with your policy interests. Our specialists have extensive knowledge on both management systems and effective and long-term occupational health and safety protection. We will inspect and certify your business in accordance with ISO 45001.",
      proof:[],
    },
    buttonTitle: "ISO45001",
  },
};
