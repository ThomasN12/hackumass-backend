export const courses = [
	// {
	// 	fullName: "SPECIAL TOPICS - INTRODUCTION TO DATA ANALYSIS IN R",
	// 	codeName: "cics197r",
	// 	major: "COMPUTER SCIENCE",
	// 	description:
	// 		"An introduction to data analysis in the open-source R language, with an emphasis on practical data work. Topics will include data wrangling, summary statistics, modeling, and visualization. Will also cover fundamental programming concepts including data types, functions, flow of control, and good programming practices. Intended for a broad range of students outside of computer science. Some familiarity with statistics is expected. 1 credit.",
	// },
	// {
	// 	fullName: "MAKE: A HANDS-ON INTRODUCTION TO PHYSICAL COMPUTING",
	// 	codeName: "cics256",
	// 	major: "COMPUTER SCIENCE",
	// 	description:
	// 		"Inspired by the Maker movement, this course provides a hands-on introduction to physical computing: sensing and responding to the physical world using computers. Specific topics include: basic electronics and circuit design, microcontroller programming using Arduinos, sensing and responding to the physical world, rapid prototyping (3D printing and laser cutting etc.), soft circuits and wearable electronics. The course will encourage and empower students to invent, design, and build practical hardware projects that interact with the physical world. This course has a required lab section, and counts as one of the CS Lab Science Requirement courses for the BS-CS. Prerequisite: COMPSCI 187 and Basic Math Skills (R1). 4 credits.",
	// },
	{
		fullName: "INTRODUCTION TO PROGRAMMING",
		codeName: "compsci119",
		major: "COMPUTER SCIENCE",
		description:
			"A complete introduction to computer programming using the Python language. Topics include coverage of all the supported data types and program code structures, functions (up through lambda expressions and recursion), reasoning about and debugging existing code, implementation of custom libraries, selection of data structures, and the fundamentals of object-oriented programming. Students will create, debug, and run Python 3 programs that explore each of these topics in turn, from simple loops up through the processing of large data sets, and eventually to the creation of professional-quality libraries to synthesize graphics images and audio files. No prior programming experience expected. Not open to Computer Science majors. 3 credits.",
	},
	{
		fullName: "PROGRAMMING WITH DATA STRUCTURES",
		codeName: "compsci187",
		major: "COMPUTER SCIENCE",
		description:
			"The course introduces and develops methods for designing and implementing abstract data types using the Java programming language. The main focus is on how to build and encapsulate data objects and their associated operations. Specific topics include linked structures, recursive structures and algorithms, binary trees, balanced trees, and hash tables. These topics are fundamental to programming and are essential to other courses in computer science. The course involves weekly programming assignments, in-class quizzes, discussion section exercises, and multiple exams. Prerequisites: COMPSCI 121 (or equivalent Java experience). A grade of B or better in COMPSCI 121 (or a grade of C or better in COMPSCI 186 (or COMPSCI 190D) is required for students enrolling in COMPSCI 187 and Basic Math Skills (R1). Basic Java language concepts are introduced quickly; if unsure of background, contact instructor. 4 credits.",
	},
	{
		fullName: "PRACTICUM - INTRODUCTION TO THE C PROGRAMMING LANGUAGE",
		codeName: "compsci198c",
		major: "COMPUTER SCIENCE",
		description:
			"This practicum assumes general background and experience in computer programming (such as that provided by COMPSCI 121 or a similar introductory programming course) and some knowledge of data structures. Content will include basic C data types, declarations, expressions, statements, and functions; simple use of macros; some common library calls (such as formatted input/output); basic pointer manipulation using linked lists; and introduction to using standard tools (gcc and make). It is recommended that students planning to take COMPSCI 230 take this class along with COMPSCI 187. Prerequisite: COMPSCI 121 or COMPSCI 186 or INFO 190T/CICS 160. 1 credit.",
	},
	{
		fullName: "PROGRAMMING METHODOLOGY",
		codeName: "compsci220",
		major: "COMPUTER SCIENCE",
		description:
			"Development of individual skills necessary for designing, implementing, testing and modifying larger programs, including: design strategies and patterns, using functional and object-oriented approaches, testing and program verification, code refactoring, interfacing with libraries. There will be significant programming and mid-term and final examinations. Prerequisite: COMPSCI 187. 4 credits.",
	},
	{
		fullName: "COMPUTER SYSTEMS PRINCIPLES",
		codeName: "compsci230",
		major: "COMPUTER SCIENCE",
		description:
			'Large-scale software systems like Google - deployed over a world-wide network of hundreds of thousands of computers - have become a part of our lives. These are systems success stories - they are reliable, available ("up" nearly all the time), handle an unbelievable amount of load from users around the world, yet provide virtually instantaneous results. On the other hand, many computer systems don\'t perform nearly as well as Google - hence the now-clich? "the system is down." In this class, we study the scientific principles behind the construction of high-performance, scalable systems. The course begins with a discussion of C data representation, and moves up the stack from there to the features of modern architectures, assembly languages, and operating system services such as I/O, process, and synchronization. This class assumes students have either taken COMPSCI 198C or have equivalent experience in the C programming language. Prerequisite: COMPSCI 187. 4 credits.',
	},
	{
		fullName: "INTRODUCTION TO COMPUTATION",
		codeName: "compsci250",
		major: "COMPUTER SCIENCE",
		description:
			"Basic concepts of discrete mathematics useful to computer science: set theory, strings and formal languages, propositional and predicate calculus, relations and functions, basic number theory. Induction and recursion: interplay of inductive definition, inductive proof, and recursive algorithms. Graphs, trees, and search. Finite-state machines, regular languages, nondeterministic finite automata, Kleene's Theorem. Problem sets, 2 midterm exams, timed final. Prerequisite: COMPSCI 187 (or ECE 241 or INFO 190T/CICS 160) and MATH 132. 4 credits.",
	},
	{
		fullName: "INTRODUCTION TO ALGORITHMS",
		codeName: "compsci311",
		major: "COMPUTER SCIENCE",
		description:
			"This course will introduce you to a variety of techniques to design algorithms, such as divide and conquer, greedy, dynamic programming, and network flow. You will learn to study the performance of various algorithms within a formal, mathematical framework. You will also learn how to design very efficient algorithms for many kinds of problems and recognize problems that currently do not have efficient algorithms. Assignments may include programming: you should be able to program in Java, C, or some other closely related language. Mathematical experience (as provided by COMPSCI 250) is required. This course counts as an Elective toward the CS Major. Prerequisite: COMPSCI 187 and either COMPSCI 250 or MATH 455. 4 credits.",
	},
	{
		fullName: "INTRODUCTION TO SOFTWARE ENGINEERING",
		codeName: "compsci320",
		major: "COMPUTER SCIENCE",
		description:
			"In this course, students learn and gain practical experience with software engineering principles and techniques. The practical experience centers on a semester-long team project in which a software development project is carried through all the stages of the software life cycle. Topics in this course include requirements analysis, specification, design, abstraction, programming style, testing, maintenance, communication, teamwork, and software project management. Particular emphasis is placed on communication and negotiation skills and on designing and developing maintainable software. Use of computer required. Several written assignments, in-class presentations, and a term project. This course satisfies the IE Requirement for CS Major. Prerequisite: COMPSCI 220. 4 credits.",
	},
	{
		fullName: "INTRODUCTION TO HUMAN COMPUTER INTERACTION",
		codeName: "compsci325",
		major: "COMPUTER SCIENCE",
		description:
			'Human-Computer Interaction design is "design for human use". Computers are a ubiquitous part of many interactions in our lives, from the mundane everydayness of light switches and "smart" vending machines to entertainment and education to sophisticated instruments and complex energy and defense systems. In this course, we will challenge you to broaden your grasp of what a user interface can and should be, and try your hand at doing better yourself. It is a fast-paced, hands-on, project-based experience that will challenge many of your ideas of what computer science is and can be. It is designed around active lecture sessions supported by readings, working classes, and team projects, where students practice and explore the concepts introduced in lecture, and go well beyond them to learn and apply HCI techniques that build into group projects. More specifically, the course adopts a human-centered design (HCD) approach and teaches a highly iterative process called design thinking. The design thinking process draws heavily on the fundamentals of human-computer interaction (HCI) methods. I also cover design methodologies, evaluation methodologies (both quantitative and qualitative), human information processing, cognition, and perception. This course counts as an Elective toward the CS and INFORM Majors. Prerequisite: COMPSCI 186 (or COMPSCI 187). 3 credits.',
	},
	{
		fullName: "WEB PROGRAMMING",
		codeName: "compsci326",
		major: "COMPUTER SCIENCE",
		description:
			"The web is arguably today's most important application platform. Web browsers run on practically every device, and even many phone applications are in fact web applications under the covers. This course will cover a broad range of client-side web technologies, including HTTP itself, HTML5, CSS, and JavaScript; it will additionally cover key concepts for the server side of web applications, including key value stores and SQL servers. This course will also cover key concepts and technologies including AJAX, JavaScript libraries (e.g., jQuery), and web security. This course is hands-on and heavily project-based; students will construct a substantial dynamic web application based on the concepts, technologies, and techniques presented during lectures and in readings. This course satisfies the IE Requirement for CS and INFORM Majors. Prerequisites: CS Majors: COMPSCI 220 (or COMPSCI 230); INFORM Majors: INFO 248 and (COMPSCI 186 or COMPSCI 187 or INFO 190T/CICS 160). Note: as the name web programming denotes, programming is a key component of this class. Previous background in JavaScript is strongly recommended. 4 credits.",
	},
	{
		fullName: "MOBILE HEALTH SENSING AND ANALYTICS",
		codeName: "compsci328",
		major: "COMPUTER SCIENCE",
		description:
			"In recent years, the ability to continuously monitor activities, health, and lifestyles of individuals using sensor technologies has reached unprecedented levels. The typical smartphone comes equipped with a plethora of sensors for monitoring activity, speech patterns, social interactions, and location. In addition, mobile accessories such as wearable wristbands and chestbands now enable routine and continuous monitoring of a host of physiological signals (e.g., heart rate, respiratory rate, skin Conductance, and others.). In conjunction, these sensors can enable higher-order inferences about more complex human activities/behavioral states (e.g., activity patterns, stress, sleep, etc.). Such ubiquitous sensing in daily life, referred to as mobile health sensing and monitoring, promises to revolutionize our understanding of human activities and health conditions. This course is an introduction to personal health sensing and monitoring through mobile phones and on-body sensors and addresses several aspects including mobile devices and applications for health, sensor data quality and reliability challenges, inference of key health assessments from sensor data including such as activity patterns, sleep patterns, or stress, sensor data visualization and feedback, and practical considerations such as battery lifetime. Prerequisite: CS Majors: COMPSCI 187; INFORM Majors: INFO 248 and (COMPSCI 186 or COMPSCI 187 or INFO 190T/CICS 160). 3 credits.",
	},
	{
		fullName: "PRACTICE AND APPLICATIONS OF DATA MANAGEMENT",
		codeName: "compsci345",
		major: "COMPUTER SCIENCE",
		description:
			"Computing has become data-driven, and databases are now at the heart of commercial applications. The purpose of this course is to provide a comprehensive introduction to the use of data management systems within the context of various applications. Some of the covered topics include application-driven database design, schema refinement, implementation of basic transactions, data on the web, and data visualization. The class will follow a flipped classroom model; students will be required to review materials in preparation for each week and they will work collaboratively on practical problems in class. This course counts as an Elective toward the CS and INFORM Major. Students who have completed COMPSCI 445 are not eligible to take this course without instructor permission. Prerequisite: CS Majors: COMPSCI 187; INFORM Majors: INFO 248 and (COMPSCI 186 or COMPSCI 187 or INFO 190T/CICS 160). 3 credits.",
	},
	{
		fullName: "INTRODUCTION TO COMPUTER VISION",
		codeName: "compsci370",
		major: "COMPUTER SCIENCE",
		description:
			'This introductory computer vision class will address fundamental questions about getting computers to "see" like humans. We investigate questions such as -What is the role of vision in intelligence? -How are images represented in a computer? -How can we write algorithms to recognize an object? -How can humans and computers "learn to see better" from experience? We will write a number of basic computer programs to do things like recognize handwritten characters, track objects in video, and understand the structure of images. Prerequisite: COMPSCI 240 or 383. 3 credits.',
	},
	{
		fullName: "INTRODUCTION TO COMPUTER GRAPHICS",
		codeName: "compsci373",
		major: "COMPUTER SCIENCE",
		description:
			"This course introduces the fundamental concepts of 2D and 3D computer graphics. It covers the basic methods for modeling, rendering, and imaging. Topics include: image processing, 2D/3D modeling, 3D graphics pipeline, WebGL, shading, texture mapping, ray tracing, 3D printing. Throughout the class, we will teach students to learn modern graphics techniques, to model the visual world algorithmically, and to implement algorithms using JavaScript. Students who have taken COMPSCI 473 are not eligible to take this course. Students cannot take COMPSCI 497C after taking this course. This course counts as a CS Elective toward the CS Major. Prerequisites: COMPSCI 187 and MATH 235 (or INFO 150 or COMPSCI 240). 3 credits.",
	},
	{
		fullName: "OPERATING SYSTEMS",
		codeName: "compsci377",
		major: "COMPUTER SCIENCE",
		description:
			"In this course we examine the important problems in operating system design and implementation. The operating system provides a well-known, convenient, and efficient interface between user programs and the bare hardware of the computer on which they run. The operating system is responsible for allowing resources (e.g., disks, networks, and processors) to be shared, providing common services needed by many different programs (e.g., file service, the ability to start or stop processes, and access to the printer), and protecting individual programs from one another. The course will start with a brief historical perspective of the evolution of operating systems over the last fifty years, and then cover the major components of most operating systems. This discussion will cover the tradeoffs that can be made between performance and functionality during the design and implementation of an operating system. Particular emphasis will be given to three major OS subsystems: process management (processes, threads, CPU scheduling, synchronization, and deadlock), memory management (segmentation, paging, swapping), file systems, and operating system support for distributed systems. This course counts as a CS Elective toward the CS Major. Prerequisites: COMPSCI 230. 4 credits.",
	},
	{
		fullName: "ARTIFICIAL INTELLIGENCE",
		codeName: "compsci383",
		major: "COMPUTER SCIENCE",
		description:
			"The course explores key concepts underlying intelligent systems, which are increasingly deployed in consumer products and onlineservices. Topics includeproblem solving, state-space representation, heuristicsearch techniques, game playing, knowledge representation, logical reasoning, automated planning, reasoning underuncertainty, decision theory and machine learning. We will examine the use of these concepts in the design of intelligent agents in the context of severalapplications. Students should be comfortable programming in Python. This course counts as a CS Elective toward the CS Major. Prerequisites: COMPSCI 220 (or COMPSCI 230) and COMPSCI 240 (or STAT 515). 3 credits.",
	},
	{
		fullName: "INTRODUCATION TO MACHINE LEARNING",
		codeName: "compsci389",
		major: "COMPUTER SCIENCE",
		description:
			'The course provides an introduction to machine learning algorithms and applications. Machine learning algorithms answer the question: "How can a computer improve its performance based on data and from its own experience?" The course is roughly divided into thirds: supervised learning (learning from labeled data), reinforcement learning (learning via trial and error), and real-world considerations like ethics, safety, and fairness. Specific topics include linear and non-linear regression, (stochastic) gradient descent, neural networks, backpropagation, classification, Markov decision processes, state-value and action-value functions, temporal difference learning, actor-critic algorithms, the reward prediction error hypothesis for dopamine, connectionism for philosophy of mind, and ethics, safety, and fairness considerations when applying machine learning to real-world problems. This course counts as an Elective toward the CS and INFORM Majors. Prerequisite: COMPSCI 220 (or COMPSCI 230), COMPSCI 240 (or STAT 515), and MATH 233. 3 credits.',
	},
	{
		fullName: "REVERSE ENGINEERING AND VULNERABILITY ANALYSIS",
		codeName: "compsci390r",
		major: "COMPUTER SCIENCE",
		description:
			"Many software developers aren't aware of how to properly write secure code. This course covers practical skills in reverse engineering and binary exploitation, and examines the techniques used by hackers in recent major security incidents. The course objective is to provide students with a strong understanding of attack patterns, and to ensure students implement more secure coding practices in their own code. This course begins with an introduction to Intel-based assembly, reverse engineering, vulnerability analysis, and various forms of Linux-focused binary exploitation. The course then covers stack, heap and Linux kernel-based exploitation, and dive into common defensive mitigations such as ASLR, NX and Stack Cookies alongside techniques to bypass each of them. This course is focused on low-level software written in C. COMPSCI 230 is sufficient for demonstrating knowledge of C and that the student has been introduced to assembly. Students who have taken 198C (or can demonstrate a proficiency in C) and can demonstrate a familiarity with assembly can request an override from the instructor. This course counts as an Elective for the CS Major. Prerequisites: COMPSCI 230 (or E&C-ENG 322 or E&C-ENG 373) or permission of instructor. 3 credits.",
	},
	{
		fullName: "SOFTWARE ENTREPRENEURSHIP",
		codeName: "compsci420",
		major: "COMPUTER SCIENCE",
		description:
			"This course is geared towards students interested in developing software that moves from early stage proof-of-concept ideas towards marketable products with societal benefit. The course leverages the expertise of the Entrepreneurs in Residence (EIR) of the Ventures @ CICS initiative at CICS. The course is grounded in Challenge Based Learning (CBL), an active, student-directed instructional framework that was developed by Apple Inc. and educators. This course counts as an Elective toward the CS major. Prerequisites: COMPSCi 320 (or COMPSCI 326). 3 credits.",
	},
	{
		fullName: "SOFTWARE ENGINEERING PROJECT MANAGEMENT",
		codeName: "compsci429",
		major: "COMPUTER SCIENCE",
		description:
			"The purpose of this course is to provide students with practical experience in the management of software development projects. Students in this course will gain this experience by serving as software development team technical managers for teams of software engineering students in COMPSCI 320. As project managers, the students in COMPSCI 429 will be responsible for: supervising and managing the work of teams of COMPSCI 320 students; interfacing with the other COMPSCI 429 students managing other teams in the course; interfacing with the course instructor, course TA, and course customer. COMPSCI 429 students will be assigned readings in software engineering project management to provide a theoretical basis for their work in this course. But the majority of work in the course will be related to the actual management of assigned development teams. As team managers, COMPSCI 429 students will set goals and schedules for their teams, track and report team progress, negotiate with leaders of other teams and the course customer, and evaluate the work of members of their teams. COMPSCI 429 course assignments may include: written team goals, plans and schedules; periodic reports on team progress; documentation of agreements reached with other team leaders and customers; evaluations of the applicability of theoretical papers to the work of this course. This course will meet at the same times and places as COMPSCI 320. Additional meetings with team members and other students in COMPSCI 429 are also expected to be arranged by mutual agreement. An additional one hour weekly meeting of all of the students in COMPSCI 429 is required. Enrollment in this course is only by permission of the instructor, and is restricted to students who have previously taken COMPSCI 320, and received a grade of A or A-. 3 credits.",
	},
	{
		fullName: "INFORMATION SYSTEMS",
		codeName: "compsci445",
		major: "COMPUTER SCIENCE",
		description:
			"This course is an introduction to the efficient management of large-scale data. The course includes principles for representing information as structured data, query languages for analyzing and manipulating structured data, and core systems principles that enable efficient computation on large data sets. Classical relational database topics will be covered (data modeling, SQL, query optimization, concurrency control), as well as semi-structured data (XML, JSON), and distributed data processing paradigms (e.g. MapReduce and Spark). Additional application topics may include web application development, data integration, processing data streams, database security and privacy. This course counts as an Elective toward the CS Major. Prerequisites: COMPSCI 220 (or 230) and COMPSCI 311 and COMPSCI 345. 3 credits.",
	},
	{
		fullName: "SEARCH ENGINES",
		codeName: "compsci446",
		major: "COMPUTER SCIENCE",
		description:
			"This course provides an overview of the important issues in information retrieval, and how those issues affect the design and implementation of search engines. The course emphasizes the technology used in Web search engines, and the information retrieval theories and concepts that underlie all search applications. Mathematical experience (as provided by COMPSCI 240) is required. You should also be able to program in Java (or some other closely related language). This course counts as an Elective toward the CS Major. Prerequisite: COMPSCI 240 or COMPSCI 383. 3 credits.",
	},
	{
		fullName: "COMPUTER NETWORKS",
		codeName: "compsci453",
		major: "COMPUTER SCIENCE",
		description:
			"Introduction to computer communication networks and protocols. Fundamental concepts in the design and analysis of computer networks. Topics include: layered network architectures, networked applications, network programming interfaces, transport, congestion, routing, data link protocols, local area and data center networks, network security, and wireless networks. Examples drawn from the Internet (e.g., TCP, UDP, and IP) protocol suite. Homework assignments involve programming and written tasks. In Fall 2020, this course will be taught as a primarily online class, without in-class lectures, but with extensive on-line material including recorded video material, interactive exercises, and online discussion. There will be an optional weekly, one-hour in-class and on-line open discussion period. This course counts as an Elective toward the CS Major. Prerequisites: Experience programming; COMPSCI 230 or COMPSCI 377. 3 credits.",
	},
	{
		fullName: "APPLIED CRYPTOGRAPHY",
		codeName: "compsci466",
		major: "COMPUTER SCIENCE",
		description:
			"This is an undergraduate-level introduction to cryptography. It is a theory course with a significant mathematical component. However, our viewpoint will be theory applied to practice in that we will aim to treat topics in a way of applied value. We will discuss cryptographic algorithms used in practice and how to reason about their security. More fundamentally, we will try to understand what security is in a rigorous way that allows us to follow sound principles and uncover design weaknesses. The primary topics are: blockciphers, pseudorandom functions, symmetric-key encryption schemes, hash functions, message authentication codes, public-key encryption schemes, digital signature schemes, and public-key infrastructures. This course counts as an Elective toward the CS Major. Prerequisites: COMPSCI 311. 3 credits.",
	},
	{
		fullName: "INTRODUCTION TO USER EXPERIENCE RESEARCH",
		codeName: "compsci490u",
		major: "COMPUTER SCIENCE",
		description:
			"As technology becomes more and more integrated with our work and life, it is increasingly critical to consider how we can better design technology to enhance the experience and behavior of its users. UX Research, or User Experience Research, is an interdisciplinary field that combines knowledge from computer science, design, statistics, and psychology to gather insights about the needs, attitudes, and behaviors of technology users to inspire and inform design.This course introduces you to the cycle of UX research and aims to prepare you to tackle real-world UX research challenges. You will learn about the principles and practices of UX research, how to conduct user experiments to explore user behaviors and motivations, how to use statistical software to analyze data, and how to present your findings in an effective manner. This course counts as an Elective toward the CS and INFORM Majors. Prerequisites: COMPSCI 325. 3 credits.",
	},
	{
		fullName: "SEMINAR - COMPUTER NETWORKING LAB",
		codeName: "compsci491g",
		major: "COMPUTER SCIENCE",
		description:
			'In this course, students will learn how to put "principles into practice," in a hands-on-networking lab course. The course will cover router, switches and end-system labs in the areas of Single Segment IP Networks, Multiple Segment IP Networks and Static Routing, Dynamic Routing Protocols (RIP, OSPF and BGP), LAN switching, Transport Layer Protocols: UDP and TCP, NAT, DHCP, DNS, and SNMP. Students will also get engaged in evaluating power consumption of network components as an aid in the design of energy efficient (green) networks. This course counts as an Elective toward the CS Major. Prerequisite: COMPSCI 453. 3 credits.',
	},
	{
		fullName: "INDEPENDENT STUDY - SOCIAL ENTREPRENEURSHIP LAUNCHPAD",
		codeName: "compsci496c",
		major: "COMPUTER SCIENCE",
		description:
			"Social Entrepreneurship Launchpad offers a team-based opportunity to students who have successfully completed COMPSCI 420 (previously COMPSCI 490S) and are committed to launching marketable products that contribute to the common good. Teams will be mentored by CICS Entrepreneurs in Residence (EIRs) and UMass alumni. Teams test the commercial potential of their product ideas and receive mentoring and guidance from EIRs and industry partners to secure funding, build a marketing plan, and consolidate a customer base. This course does not count as either a CS or INFORM Elective. Prerequisite: COMPSCI 420/490S. 3 credits.",
	},
	{
		fullName: "FORMAL LANGUAGE THEORY",
		codeName: "compsci501",
		major: "COMPUTER SCIENCE",
		description:
			"Introduction to formal language theory. Topics include finite state languages, context-free languages, the relationship between language classes and formal machine models, the Turing Machine model of computation, theories of computability, resource-bounded models, and NP-completeness. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 311 or equivalent. It is recommended that students have a B- or better in 311 in order to attempt 501. 3 credits.",
	},
	{
		fullName: "ETHICAL CONSIDERATIONS IN COMPUTING",
		codeName: "compsci508",
		major: "COMPUTER SCIENCE",
		description:
			"This course considers an array of ethical issues in computing. Readings, class discussions, and guest speakers will cover topics related to avenues of development in artificial intelligence, privacy, identity, inclusiveness, environmental responsibility, internet censorship, network policy, plagiarism, intellectual property and others. All examples will be drawn from current and recent events with readings from a range of sources both journalistic and academic. Course assignments will have real world applications and offer students opportunities for developing their speaking and writing skills. Class discussions will be a vibrant component of the course. Open to Graduate students only. Undergraduate CS Majors with permission of instructor (counts as an Elective toward the CS Major). 3 credits.",
	},
	{
		fullName: "ALGORITHMS FOR DATA SCIENCE",
		codeName: "compsci514",
		major: "COMPUTER SCIENCE",
		description:
			"With the advent of social networks, ubiquitous sensors, and large-scale computational science, data scientists must deal with data that is massive in size, arrives at blinding speeds, and often must be processed within interactive or quasi-interactive time frames. This course studies the mathematical foundations of big data processing, developing algorithms and learning how to analyze them. We explore methods for sampling, sketching, and distributed processing of large scale databases, graphs, and data streams for purposes of scalable statistical description, querying, pattern mining, and learning. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 240 (or STATISTCS 515) and COMPSCI 311 both with a grade of B+ or better, OR (COMPSCI 240 and STATISTCS 515 and COMPSCI 311 and MATH 233 and MATH 235, all with a C or better). 3 credits",
	},
	{
		fullName: "THEORY AND PRACTICE OF SOFTWARE ENGINEERING",
		codeName: "compsci520",
		major: "COMPUTER SCIENCE",
		description:
			"Introduces students to the principal activities and state-of-the-art techniques involved in developing high-quality software systems. Topics include: requirements engineering, formal specification methods, design principles & patterns, verification & validation, debugging, and automated software engineering. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 320. 3 credits.",
	},
	{
		fullName: "SYSTEMS FOR DATA SCIENCE",
		codeName: "compsci532",
		major: "COMPUTER SCIENCE",
		description:
			"In this course, students will learn the fundamentals behind large-scale systems in the context of data science. We will cover the issues involved in scaling up (to many processors) and out (to many nodes) parallelism in order to perform fast analyses on large datasets. These include locality and data representation, concurrency, distributed databases and systems, performance analysis and understanding. We will explore the details of existing and emerging data science platforms, including MapReduce-Hadoop, Spark, and more. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 377 and COMPSCI 445. 3 credits.",
	},
	{
		fullName: "COMPUTER ARCHITECTURE",
		codeName: "compsci535",
		major: "COMPUTER SCIENCE",
		description:
			"The structure of digital computers is studied at several levels, from the basic logic level, to the component level, to the system level. Topics include: the design of basic components such as arithmetic units and registers from logic gates; the organization of basic subsystems such as the memory and I/O subsystems; the interplay between hardware and software in a computer system; the von Neumann architecture and its performance enhancements such as cache memory, instruction and data pipelines, coprocessors, and parallelism. Weekly assignments, semester project, 2 hours exams, final. Undergraduate Prerequisites: COMPSCI 335. 3 credits.",
	},
	{
		fullName: "APPLIED INFORMATION RETRIEVAL",
		codeName: "compsci546",
		major: "COMPUTER SCIENCE",
		description:
			"COMPSCI 546 is a graduate level course intended to cover information retrieval and other information processing activities, from an applied perspective. There will be numerous programming projects and assignments. It provides a richer technical follow on to COMPSCI 446 (Search Engines) for undergraduates interested in a deeper understanding of the technologies. It also provides a strong basis for continuing on with COMPSCI 646 (Information Retrieval) for those graduate students who are interested in a more complete theoretical coverage of the area. Topics will include: search engine construction (document acquisition, processing, indexing, and querying); learning to rank; information retrieval system performance evaluation; classification and clustering; other machine learning information processing tasks (e.g. basic deep learning models for information retrieval); and many more. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 320 and either COMPSCI 383, COMPSCI 446, or COMPSCI 585. 3 credits.",
	},
	{
		fullName: "INTRODUCTION TO SIMULATION",
		codeName: "compsci550",
		major: "COMPUTER SCIENCE",
		description:
			"How can we use computers to design systems and, more generally, make decisions, in the face of complexity and uncertainty? Simulation techniques apply the power of the computer to study complex stochastic systems when analytical or numerical techniques do not suffice. It is the most frequently used methodology for the design and evaluation of computer, telecommunication, manufacturing, healthcare, financial, and transportation systems, to name just a few application areas. Simulation is an interdisciplinary subject, incorporating ideas and techniques from computer science, probability, statistics, optimization, and number theory. Simulation models, which embody deep domain expertise, can effectively complement machine-learning approaches. This course will provide the student with a hands-on introduction into this fascinating and useful subject. This course counts as an Elective toward the CS Major. Undergraduate Prerequisite: COMPSCI 187 and STAT 515. 3 credits.",
	},
	{
		fullName: "SYSTEM DEFENSE AND TEST",
		codeName: "compsci561",
		major: "COMPUTER SCIENCE",
		description:
			"This class trains students to detect and analyze weaknesses and vulnerabilities in target systems as a method of assessing the security of a system. We focus on tools and techniques that an attacker would employ but from the perspective of an ethical system administrator. Topics include tools and techniques for penetration testing and attacks, information gathering, social engineering, and defenses. Specific topics include malware, denial of service attacks, SQL injection, buffer overflow, session hijacking, and system hacking, network sniffing and scans, wireless encryption weaknesses and other WiFi issues, IDS/firewall evasion, metasploit tools, physical security, and setting up honeypots. Was INFOSEC 690S. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 360 (or COMPSCI 460 or COMPSCI 560/597N or COMPSCI 660) and COMPSCI 453. 3 credits.",
	},
	{
		fullName: "DATA VISUALIZATION AND EXPLORATION",
		codeName: "compsci571",
		major: "COMPUTER SCIENCE",
		description:
			"In this course, students will learn the fundamental algorithmic and design principles of visualizing and exploring complex data. The course will cover multiple aspects of data presentation including human perception and design theory; algorithms for exploring patterns in data such as topic modeling, clustering, and dimensionality reduction. A wide range of statistical graphics and information visualization techniques will be covered. We will explore numerical data, relational data, temporal data, spatial data, graphs and text. Hands-on projects will be based on Python or JavaScript with D3. This course counts as an Elective toward the CS and INFORM Majors. Undergraduate Prerequisites: COMPSCI 220, or COMPSCI 230, or COMPSCI 326. No prior knowledge of data visualization or exploration is assumed. 3 credits.",
	},
	{
		fullName: "INTELLIGENT VISUAL COMPUTING",
		codeName: "compsci574",
		major: "COMPUTER SCIENCE",
		description:
			"Intelligent visual computing is an emerging new field that seeks to combine modern trends in machine learning, computer graphics, computer vision to intelligently process, analyze and synthesize 2D/3D visual data. The course will start by covering 2D image and 3D shape representations, classification and regression techniques, and the fundamentals of deep learning. The course will then provide an in-depth background on analysis and synthesis of images and shapes with deep learning, in particular convolutional neural networks, recurrent neural networks, memory networks, auto-encoders, adversarial networks, reinforcement learning methods, and probabilistic graphical models. Students will complete 5 programming assignments in Matlab/Octave and work on a course project related to visual computing with machine learning. This course counts as a CS Elective toward the CS major (BA/BS). Course was previously COMPSCI 590IV. Undergraduate Prerequisites:COMPSCI 311, COMPSCI 383, COMPSCI 373 (or COMPSCI 473). 3 credits.",
	},
	{
		fullName: "MACHINE LEARNING",
		codeName: "compsci589",
		major: "COMPUTER SCIENCE",
		description:
			"This course will introduce core machine learning models and algorithms for classification, regression, clustering, and dimensionality reduction. On the theory side, the course will focus on effectively using machine learning methods to solve real-world problems with an emphasis on model selection, regularization, and empirical evaluation. The assignments will involve both mathematical problems and implementation tasks. Knowledge of a high-level programming language is absolutely necessary. Python is most commonly used (along with standard libraries such as numpy, scipy, and scikit-learn), but languages such as Matlab, R, Scala, Julia would also be suitable. While this course has an applied focus, it still requires appropriate mathematical background in probability and statistics, calculus, and linear algebra. The prerequisites for undergrads were previously COMPSCI 383 and MATH 235 (COMPSCI 240 provides sufficient background in probability, and MATH 131/132 provide sufficient background in calculus). Graduate students can check the descriptions for these courses to verify that they have sufficient mathematical background for 589. Strong foundations in linear algebra, calculus, probability, and statistics are essential for successfully completing this course. Graduate students from outside computer science with sufficient background are also welcome to take the course. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: MATH 545 and COMPSCI 240 and STATS 515 C or better. MATH 545 can be skipped by students who have taken MATH 235 and MATH 233 both with B+ or better. STATS 515 can be skipped by students who have taken COMPSCI 240 with a B+ or better. 3 credits.",
	},
	{
		fullName:
			"CYBER EFFECTS: REVERSE ENGINEERING, EXPLOIT ANALYSIS, AND CAPABILITY DEVELOPMENT",
		codeName: "compsci590j",
		major: "COMPUTER SCIENCE",
		description:
			"This course covers a broad range of topics related to cyber security and operations. Our focus is on real world studies of reverse engineering, exploit analysis, and capability development within the context of computer network operations and attack. The course has an emphasis on hands-on exercises and projects. Topics covered include computer architecture and assembly language, principles of embedded security, the essentials of exploit development and analysis (including using industry standard tools such as Ghidra, and utilizing computer security databases such as CVE), and discussion of real-world events and techniques. This course counts as an Elective toward the CS Major. Undergraduate Prerequisite: COMPSCI 230 (or ECE 322) and COMPSCI 360 (or COMPSCI 460 or ECE 371). 3 credits.",
	},
	{
		fullName: "ADVANCED DIGITAL FORENSIC SYSTEMS",
		codeName: "compsci590k",
		major: "COMPUTER SCIENCE",
		description:
			"This course introduces students to the principal activities and state-of-the-art techniques involved in developing digital forensics systems. Topics covered may include: advanced file carving and reconstruction, forensic analysis of modern filesystems, network forensics, mobile device forensics, memory forensics, and anti-forensics. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 365 (or COMPSCI 377). 3 credits.",
	},
	{
		fullName: "SEMINAR - NEURAL NETWORKS: NEUROSCIENCE AND ENGINEERING",
		codeName: "compsci591nr",
		major: "COMPUTER SCIENCE",
		description:
			"This is a project based course, focusing on the science connecting the field of neural network with human brain mechanism, as well as advancements which are at the front of the field. We start by introducing a few neural network architectures with their learning paradigms, including deep feedforward and recurrent networks, Hopfield s memory, and Kohonen s self organizing maps. We continue by building on the top of these: clique structures and brain-like updatable architectures, explainable AI, combining symbolic with subsymbolic into one strong AI, robust AI, deep fake applications, and up to lifelong learning. The course is project based with grades based on active class participation, presenting non-trivial topics, research project that will be done during the semester, and research paper written based on this work. I ll assist students to get their research submitted to publications, if their work will reach high level. Students in 591NR will be able to run simpler projects. COMPARISON BETWEEN COMPSCI 682 AND 591NR/691NR: 682 teaches the engineering techniques necessary to train current neural networks. 591NR/691NR provides far larger view of the field, focusing on the science both relation with human and natural intelligence, and on the advancements which are in the forefront of the neural networks field. 3 credits. This course counts as an Elective toward the CS Major. Undergraduate Prerequisites: COMPSCI 311. 3 credits.",
	},
	{
		fullName: "INDEPENDENT STUDY - MACHINE LEARNING APPLIED TO CHILD RESCUE",
		codeName: "compsci596e",
		major: "COMPUTER SCIENCE",
		description:
			"Students will work collaboratively to construct production-grade software used to advance the goal of Child Rescue. This course is a group-based, guided independent study. Our goal is to build practical machine learning models to be used by professionals dedicated to rescuing children from abuse. Students will be encouraged to design and build their own diagnostic and machine learning tools, while also learning from professionals in the fields of digital forensics and law enforcement. The entire student group will meet once a week to share progress via short presentations. 3 credits",
	},
	{
		fullName: "ADVANCED ALGORITHMS",
		codeName: "compsci611",
		major: "COMPUTER SCIENCE",
		description:
			"Principles underlying the design and analysis of efficient algorithms. Topics to be covered include: divide-and-conquer algorithms, graph algorithms, matroids and greedy algorithms, randomized algorithms, NP-completeness, approximation algorithms, linear programming. Prerequisites: The mathematical maturity expected of incoming Computer Science graduate students, knowledge of algorithms at the level of COMPSCI 311. 3 credits.",
	},
	{
		fullName: "OPTIMIZATION IN COMPUTER SCIENCE",
		codeName: "compsci651",
		major: "COMPUTER SCIENCE",
		description:
			"Much recent work in computer science in a variety of areas, from game theory to machine learning and sensor networks, exploits sophisticated methods of optimization. This course is intended to give students an in-depth background in both the foundations as well as some recent trends in the theory and practice of optimization for computer science. The Optimization course covers these topics, which are critical to a large number of research projects conducted within the department. 3 credits.",
	},
	{
		fullName: "INTELLIGENT VISUAL COMPUTING",
		codeName: "compsci674",
		major: "COMPUTER SCIENCE",
		description:
			"Intelligent visual computing is an emerging new field that seeks to combine modern trends in machine learning, computer graphics, computer vision to intelligently process, analyze and synthesize 2D/3D visual data. The course will start by covering 2D image and 3D shape representations, classification and regression techniques, and the fundamentals of deep learning. The course will then provide an in-depth background on analysis and synthesis of images and shapes with deep learning, in particular convolutional neural networks, recurrent neural networks, memory networks, auto-encoders, adversarial networks, reinforcement learning methods, and probabilistic graphical models. Students will complete 5 programming assignments in Matlab/Octave and work on a course project related to visual computing with machine learning. Course was previously COMPSCI 690IV. 3 credits.",
	},
	{
		fullName: "DISTRIBUTED AND OPERATING SYSTEMS",
		codeName: "compsci677",
		major: "COMPUTER SCIENCE",
		description:
			"This course provides an in-depth examination of the principles of distributed systems and advanced concepts in operating systems. Covered topics include client-server programming, distributed scheduling, virtualization, cloud computing, distributed storage, security in distributed systems, distributed middleware, ubiquitous computing, and applications such as the Internet of Things, Web and peer-to-peer systems. Prerequisites: Students should be able to easily program in a high-level language such as Java, C++ or Python, have had a course on data structures, be familiar with elements of computer architecture and have had previous exposure to the operating system concepts of processes, virtual memory, and scheduling. A previous course on uniprocessor operating systems (e.g., COMPSCI 377) will be helpful but not required. 3 credits.",
	},
	{
		fullName: "ARTIFICIAL INTELLIGENCE",
		codeName: "compsci683",
		major: "COMPUTER SCIENCE",
		description:
			"In-depth introduction to Artificial Intelligence focusing on techniques that allow intelligent systems to reason effectively with uncertain information and cope limited computational resources. Topics include: problem-solving using search, heuristic search techniques, constraint satisfaction, local search, abstraction and hierarchical search, resource-bounded search techniques, principles of knowledge representation and reasoning, logical inference, reasoning under uncertainty, belief networks, decision theoretic reasoning, representing and reasoning about preferences, planning under uncertainty using Markov decision processes, multi-agent systems, and computational models of bounded rationality. 3 credits.",
	},
	{
		fullName: "ADVANCED NATURAL LANGUAGE PROCESSING",
		codeName: "compsci685",
		major: "COMPUTER SCIENCE",
		description:
			"This course covers a broad range of advanced level topics in natural language processing. It is intended for graduate students in computer science who have familiarity with machine learning fundamentals, and previous course or research experience in natural language processing. It may also be appropriate for computationally sophisticated students in linguistics and related areas. Topics include probabilistic models of language, computationally tractable linguistic representations for syntax and semantics, neural network models for language, and selected topics in discourse and text mining. After completing the course, students should be able to read and evaluate current NLP research papers. Coursework includes a research literature review, homework assignments, and a final project. 3 credits.",
	},
	{
		fullName: "PROBABILISTIC GRAPHICAL MODELS",
		codeName: "compsci688",
		major: "COMPUTER SCIENCE",
		description:
			"Probabilistic graphical models are an intuitive visual language for describing the structure of joint probability distributions using graphs. They enable the compact representation and manipulation of exponentially large probability distributions, which allows them to efficiently manage the uncertainty and partial observability that commonly occur in real-world problems. As a result, graphical models have become invaluable tools in a wide range of areas from computer vision and sensor networks to natural language processing and computational biology. The aim of this course is to develop the knowledge and skills necessary to effectively design, implement and apply these models to solve real problems. The course will cover (a) Bayesian and Markov networks and their dynamic and relational extensions; (b) exact and approximate inference methods; (c) estimation of both the parameters and structure of graphical models. Although the course is listed as a seminar, it will be taught as a regular lecture course with programming assignments and exams. Students entering the class should have good programming skills and knowledge of algorithms. Undergraduate-level knowledge of probability and statistics is recommended. 3 credits.",
	},
	{
		fullName: "ADVANCED METHODS IN HUMAN COMPUTER INTERACTION",
		codeName: "compsci690a",
		major: "COMPUTER SCIENCE",
		description:
			"This is an advanced course in HCI. This course will provide a deeper treatment of some topics that are typically found in an undergraduate HCI course. For example, design methodologies, evaluation methodologies (both quantitative and qualitative), human information processing, cognition, and perception. This course will also introduce students to research frontiers in HCI. The course will cover topics of Universal Usability, CSCW, Digital Civics and fundamentals of designing interactive technology for people. 3 credits.",
	},
	{
		fullName: "SEMINAR - NEURAL NETWORKS: NEUROSCIENCE AND ENGINEERING",
		codeName: "compsci691nr",
		major: "COMPUTER SCIENCE",
		description:
			"This course covers various aspect of neural networks, from fundamentals to advanced concepts. Topics include feed-forward neural networks, kernel-based approaches, deep learning, recurrent neural networks, Hopfield networks, Kohonen Self-Organized Maps, Grossberg Adaptive Resonance Theory, Helmholtz machines, MDL, Symbolic neural nets, and space-time neurodynamics, with links to computational neuroscience. Theoretical foundations of supervised, unsupervised, and reinforcement learning are described. Advanced machine learning applications include image processing, speech recognition, game playing, time series prediction, and neurocontrol. The course is self-contained, preliminary knowledge of neural networks basics is useful but not required. Students at the 691 level are expected to complete a project implementing a neural network to solve a pattern recognition task, while students at the 591 level will be evaluated based on conceptual designs. COMPARISON BETWEEN COMPSCI 682 AND 591NR/691NR: 682 teaches the engineering techniques necessary to train modern neural network architectures to achieve competitive performance on problems such as image classification and sequence prediction. This includes optimization techniques, hyperparameter setting, and debugging techniques for large neural networks. There is less emphasis on theory. 591NR/691NR introduces a broader array of neural network models beyond feed-forward networks (such as Kohonen nets, Hopfield nets, Boltzmann machines, Adaptive Resonance Theory) and analyzes some of their theoretical properties, such as guaranteed convergence and stability. In general, there is more emphasis on theoretical properties, and less on engineering issues. 3 credits.",
	},
	{
		fullName: "SEMINAR - TOOLS FOR EXPLANATORY AND TUTORING SYSTEMS",
		codeName: "compsci691o",
		major: "COMPUTER SCIENCE",
		description:
			"Artificial Intelligence will radically change education. Through machine learning, data mining, analytics, robotics, and user models, AI will replace false learning boundaries (e.g., learning places, time, level of study); personalize learning; make learning instantly available to everyone; connect learners with partners; provide multi-media; and augment human learning ability. This seminar examines recent work in explanatory and tutoring systems, presents theories about digital teaching and learning, and describes how to deliver personalized teaching in online systems. Such software supports people working alone or in collaborative inquiry to rapidly access and integrate global information. This course describes how to build tutors, stimulates awareness of research issues, and promotes sound analytic and design skills. Specific topics include systems that support collaboration, inquiry, natural language dialogue, authoring tools and user models. The course is appropriate for students from many disciplines (e.g., computer science, linguistics, education, and psychology), researchers, and practitioners from academia, industry, and government. No programming is required. Students will read and critique papers about AI tools (e.g., vision, natural language), methods, and will study the complexity of human learning through advances in cognitive science. Weekly assignments invite students to critique the literature and a final project requires a detailed specification (not a program) for a tutor on your chosen topic. Students present readings from the research literature and several working systems will be available for hands-on or virtual critique. 3 credits.",
	},
	{
		fullName: "INDEPENDENT STUDY - DATA SCIENCE",
		codeName: "compsci696ds",
		major: "COMPUTER SCIENCE",
		description:
			"The goal of this course is to provide Professional Masters students withindustry mentorship and real-world data science training.Beyond-classroom educational opportunities are an excellent way to gain practical experience on a substantial project, to learn advanced skills, to collaborate with a professional PhD researcher, to form a connection to a data science company, and to work in a team with other graduate students.Industry partners propose semester-long data science projects.Students form three-to-five-person teams, each of which work on one project throughout the semester, under the guidance of their industry mentor, additional PhD student mentors, and the course faculty instructor.Furthermore, in weekly class meetings all students receive professional development education, data science hardware and software infrastructure training, data science research presentations, and career advice.Student teams gain valuable oral presentation experience and feedback by regularly presenting their work-in-progress, as well as a final public presentation of their project at the end of the semester.Advantages of these industry relationships often include access to rich industry-scale data, learning about real-world problems, and making industry connections useful for the future. Prerequisites: Enrollment in the CICS Professional Masters Program; submission of the pre-application to the Data Science Concentration; by the end of previous semester have completed at least two of the Data Science core requirements; a grade point average of 3.0 or higher. 3 credits.",
	},
	{
		fullName: "SPECIAL TOPICS - FIXING SOCIAL MEDIA",
		codeName: "compsci697m",
		major: "COMPUTER SCIENCE",
		description:
			"Over the past decade, user-generated participatory media social media has emerged as the dominant model for content of the Internet. From Facebook to Twitter, YouTube to Wikipedia, content created by non-professionals and circulated for commercial and non-commercial motives underpins seven of the top 10 websites in the US, and has become an increasingly important component of the news ecosystem. While social media was initially hailed as a powerful tool for broadening civic participation, many problems have emerged with the rise of the medium, from questions of whether social media usage is bad for our individual mental health, to whether the fabric of our democracy is being damaged by disinformation, fragmentation and hyperpolarization. As legislators look to regulate these platforms and commentators propose shutting them down entirely, this course looks for an alternative: affirmative visions of social media that are good for individuals and society, which we could work towards building. This class examines possible problems with existing modes of social media, discusses ways in which social media could be a benefit to individuals and societies, develops case studies of successful and healthy online communities, and ultimately designs and builds tools to improve existing social media systems or replace them with novel models. Students will write reflectively about weekly readings and discussions and participate in multi-week projects, ultimately building teams to work on final projects. Meets with COMM 697M and SPP 697M. 3 credits.",
	},
];
