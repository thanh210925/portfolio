/* ==========================================================================
   BĂNG THANH PORTFOLIO - MULTILINGUAL (VI / EN) TRANSLATION ENGINE
   ========================================================================== */

const translations = {
    vi: {
        // Navigation & Buttons
        "nav_home": "Trang chủ",
        "nav_about": "Giới thiệu",
        "nav_skills": "Kỹ năng",
        "nav_timeline": "Hành trình",
        "nav_projects": "Dự án",
        "nav_activities": "Hoạt động",
        "nav_contact": "Liên hệ",
        "nav_download_cv": 'Tải CV <i class="bi bi-download ms-1"></i>',
        
        // Hero Section
        "hero_status": "Software Engineer Portfolio",
        "hero_intro": "Xin chào, mình là Băng Thanh— sinh viên tại HUFLIT và là một người mang niềm đam mê mãnh liệt với lập trình web. Mục tiêu của mình là thiết kế và xây dựng nên những chiếc web thật ấn tượng, không chỉ mượt mà ở giao diện mà còn phải mạnh mẽ từ sâu bên trong.",
        "hero_cta": '<i class="bi bi-folder-fill me-1"></i> Xem dự án của tôi <i class="bi bi-arrow-right arrow-icon"></i>',

        // Skills Section
        "skills_title": "Kỹ Năng Cốt Lõi",
        "skills_subtitle": "Bộ công cụ giúp mình xây dựng các hệ thống web tối ưu",
        "skill1_title": "Backend & Server",
        "skill1_desc": "Tư duy logic hệ thống chặt chẽ, áp dụng kiến trúc MVC để xử lý luồng dữ liệu an toàn.",
        "skill2_title": "Giao Diện (UI)",
        "skill2_desc": "Xây dựng giao diện responsive, mượt mà và thân thiện với trải nghiệm người dùng.",
        "skill3_title": "Công Cụ & Khác",
        "skill3_desc": "Khả năng đọc hiểu tài liệu chuyên ngành tốt và quản lý mã nguồn linh hoạt.",
        "skill_eng": "Tiếng Anh (TOEIC)",

        // Timeline Section (Học Vấn & Kinh Nghiệm)
        "timeline_badge": '<i class="bi bi-journal-bookmark-fill me-1"></i> Học Vấn & Kinh Nghiệm',
        "timeline_title": "Học Vấn & Kinh Nghiệm",
        "timeline_subtitle": "Hành trình tích lũy kiến thức chuyên ngành và rèn luyện kỹ năng lập trình thực chiến",
        "timeline1_year": "2023 - 2027",
        "timeline1_school": "Trường Đại học Ngoại Ngữ Tin học TPHCM (HUFLIT)",
        "timeline1_major": 'Chuyên ngành: <strong>Công Nghệ Phần Mềm</strong>',
        "timeline1_status": '<i class="bi bi-mortarboard-fill me-1"></i> Đang theo học',
        "timeline2_year": "2024 - Hiện tại",
        "timeline2_title": "Phát Triển Dự Án Thực Tế & AI",
        "timeline2_desc": 'Thực hiện dự án <strong>CineZone</strong> tích hợp C# .NET 8.0, Machine Learning & Gemini AI API',
        "timeline2_badge": '<i class="bi bi-code-slash me-1"></i> Thực hành chuyên sâu',
        "timeline3_year": "2023 - 2024",
        "timeline3_title": "Xây Dựng Nền Tảng Công Nghệ",
        "timeline3_desc": "Thành thạo lập trình C#, Cấu trúc dữ liệu & Giải thuật, SQL Server & Web Front-end",
        "timeline3_badge": '<i class="bi bi-check-circle-fill me-1"></i> Hoàn thành nền tảng',

        // Projects Section
        "projects_main_title": "Projects",
        "proj1_title": "CINEZONE - Hệ Thống Quản Lý & Đặt Vé Xem Phim",
        "proj1_desc": "Nền tảng web toàn diện số hóa quy trình vận hành giữa khách hàng và bộ phận quản lý rạp chiếu phim, giải quyết bài toán đặt chỗ thời gian thực và tự động hóa doanh nghiệp.",
        "proj1_acc1_head": '<i class="bi bi-hdd-network text-warning me-2 fs-5"></i> Kiến trúc & Vận hành Backend',
        "proj1_acc1_body": `<p class="mb-2">• Phát triển trên nền tảng C# / .NET 8.0 MVC kết hợp với Entity Framework Core và SQL Server.</p>
                            <p class="mb-2">• Ứng dụng SignalR để đồng bộ hóa dữ liệu thời gian thực cho tính năng chọn ghế và chat hỗ trợ.</p>
                            <p class="mb-0">• Thiết lập hệ thống bảo mật đa lớp (JWT, Cookie, BCrypt) và phân quyền hạt nhân (RBAC) chi tiết.</p>`,
        "proj1_acc2_head": '<i class="bi bi-cpu text-primary me-2 fs-5"></i> Tích hợp AI & Machine Learning',
        "proj1_acc2_body": `<p class="mb-2">• Face AI: Tích hợp nhận diện khuôn mặt tự động chấm công và đăng ký nhân viên.</p>
                            <p class="mb-2">• Recommendation Engine: Sử dụng thuật toán K-Means & KNN gợi ý phim theo hành vi.</p>
                            <p class="mb-2">• Apriori Algorithm: Khai phá quy luật để gợi ý combo bắp nước tối ưu.</p>
                            <p class="mb-0">• Trợ lý ảo AI: Tích hợp Google Gemini API làm chatbot tư vấn lịch chiếu 24/7.</p>`,
        "proj1_acc3_head": '<i class="bi bi-credit-card text-success me-2 fs-5"></i> Thanh toán & Tính năng Quản trị',
        "proj1_acc3_body": `<p class="mb-2">• Tích hợp cổng thanh toán trực tuyến VNPay và Stripe với cơ chế giữ/hủy chỗ thông minh.</p>
                            <p class="mb-2">• Quản lý lịch chiếu chống xung đột, phòng chiếu, mã giảm giá (Voucher Condition Engine).</p>
                            <p class="mb-0">• Tính lương nhân viên tự động dựa trên bảng công tháng và xuất vé điện tử kèm mã QR Code.</p>`,
        "proj1_role": "Vai trò: Phát triển Backend & AI Integration",

        "proj2_title": "LOREM IPSUM - Tên Dự Án Mới",
        "proj2_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "proj2_acc1_head": '<i class="bi bi-layers-half text-warning me-2 fs-5"></i> Lorem Ipsum Tính Năng 1',
        "proj2_acc1_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacus nec metus.</p>
                            <p class="mb-2">• Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.</p>
                            <p class="mb-0">• Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>`,
        "proj2_acc2_head": '<i class="bi bi-gear-wide-connected text-primary me-2 fs-5"></i> Lorem Ipsum Tính Năng 2',
        "proj2_acc2_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum.</p>
                            <p class="mb-2">• Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                            <p class="mb-0">• Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio.</p>`,
        "proj2_acc3_head": '<i class="bi bi-shield-check text-success me-2 fs-5"></i> Lorem Ipsum Tính Năng 3',
        "proj2_acc3_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante.</p>
                            <p class="mb-2">• Dui semper sapien, hendrerit gravida odio felis lacus. Morbi nec metus.</p>
                            <p class="mb-0">• Praesent sapien massa, convallis a, pellentesque nec, egestas non, nisi.</p>`,
        "proj2_role": "Vai trò: Lorem Ipsum Developer",

        // Activities Section (Hoạt Động & Sự Kiện)
        "activities_badge": '<i class="bi bi-people-fill me-1"></i> Hoạt Động & Ngoại Khóa',
        "activities_title": "Hoạt Động & Sự Kiện",
        "activities_subtitle": "Các hoạt động phong trào, sự kiện học thuật và dự án cộng đồng đã tham gia",
        "act1_title": "LOREM IPSUM - Tên Hoạt Động / Sự Kiện 1",
        "act1_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "act1_role": "Vai trò: Ban Tổ Chức / Thành Viên",
        "act2_title": "LOREM IPSUM - Tên Hoạt Động / Sự Kiện 2",
        "act2_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "act2_role": "Vai trò: Thành Viên Tham Gia",

        // Footer & Scroll Button
        "scroll_top_title": "Cuộn lên đầu trang"
    },
    en: {
        // Navigation & Buttons
        "nav_home": "Home",
        "nav_about": "About",
        "nav_skills": "Skills",
        "nav_timeline": "Timeline",
        "nav_projects": "Projects",
        "nav_activities": "Activities",
        "nav_contact": "Contact",
        "nav_download_cv": 'Download CV <i class="bi bi-download ms-1"></i>',

        // Hero Section
        "hero_status": "Software Engineer Portfolio",
        "hero_intro": "Hello, I'm Bang Thanh— a software engineering student at HUFLIT with a strong passion for web development. My goal is to design and build impressive web applications that are smooth on the frontend and robust on the backend.",
        "hero_cta": '<i class="bi bi-folder-fill me-1"></i> View My Projects <i class="bi bi-arrow-right arrow-icon"></i>',

        // Skills Section
        "skills_title": "Core Skills",
        "skills_subtitle": "Toolkit & technologies I use to build optimized web systems",
        "skill1_title": "Backend & Server",
        "skill1_desc": "Strong architectural logic mindset, applying MVC patterns for secure data flow and API integration.",
        "skill2_title": "Frontend (UI)",
        "skill2_desc": "Creating responsive, sleek, user-friendly interfaces with intuitive user experiences.",
        "skill3_title": "Tools & Others",
        "skill3_desc": "Proficient technical document reading ability and flexible version control management.",
        "skill_eng": "English (TOEIC)",

        // Timeline Section
        "timeline_badge": '<i class="bi bi-journal-bookmark-fill me-1"></i> Education & Experience',
        "timeline_title": "Education & Experience",
        "timeline_subtitle": "My academic journey and practical software development experience",
        "timeline1_year": "2023 - 2027",
        "timeline1_school": "HUFLIT University (Ho Chi Minh City)",
        "timeline1_major": 'Major: <strong>Software Engineering</strong>',
        "timeline1_status": '<i class="bi bi-mortarboard-fill me-1"></i> Currently Studying',
        "timeline2_year": "2024 - Present",
        "timeline2_title": "Real-World Projects & AI Integration",
        "timeline2_desc": 'Developing <strong>CineZone</strong> project integrating C# .NET 8.0, Machine Learning & Gemini AI API',
        "timeline2_badge": '<i class="bi bi-code-slash me-1"></i> Intensive Practice',
        "timeline3_year": "2023 - 2024",
        "timeline3_title": "Building Technology Fundamentals",
        "timeline3_desc": "Proficient in C# programming, Data Structures & Algorithms, SQL Server & Web Front-end",
        "timeline3_badge": '<i class="bi bi-check-circle-fill me-1"></i> Fundamentals Completed',

        // Projects Section
        "projects_main_title": "Projects",
        "proj1_title": "CINEZONE - Movie Management & Ticket Booking System",
        "proj1_desc": "A comprehensive web platform digitalizing cinema operations, enabling real-time seat reservation, business process automation, and smart AI assistance.",
        "proj1_acc1_head": '<i class="bi bi-hdd-network text-warning me-2 fs-5"></i> Architecture & Backend Operations',
        "proj1_acc1_body": `<p class="mb-2">• Developed on C# / .NET 8.0 MVC combined with Entity Framework Core and SQL Server.</p>
                            <p class="mb-2">• Applied SignalR for real-time seat synchronization and live support chat.</p>
                            <p class="mb-0">• Configured multi-layer security (JWT, Cookie, BCrypt) and fine-grained Role-Based Access Control (RBAC).</p>`,
        "proj1_acc2_head": '<i class="bi bi-cpu text-primary me-2 fs-5"></i> AI & Machine Learning Integration',
        "proj1_acc2_body": `<p class="mb-2">• Face AI: Integrated facial recognition for staff automated attendance and registration.</p>
                            <p class="mb-2">• Recommendation Engine: Utilized K-Means & KNN algorithms for personalized movie recommendations.</p>
                            <p class="mb-2">• Apriori Algorithm: Mined association rules for optimal concession combo upselling.</p>
                            <p class="mb-0">• AI Virtual Assistant: Integrated Google Gemini API as a 24/7 intelligent showtime chatbot.</p>`,
        "proj1_acc3_head": '<i class="bi bi-credit-card text-success me-2 fs-5"></i> Payments & Administration Features',
        "proj1_acc3_body": `<p class="mb-2">• Integrated VNPay & Stripe online payment gateways with smart seat hold/cancellation logic.</p>
                            <p class="mb-2">• Conflict-free showtime scheduling, auditorium management, and Voucher Condition Engine.</p>
                            <p class="mb-0">• Automated monthly staff payroll calculation and e-ticket generation with QR Codes.</p>`,
        "proj1_role": "Role: Backend & AI Integration Developer",

        "proj2_title": "LOREM IPSUM - New Project Title",
        "proj2_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "proj2_acc1_head": '<i class="bi bi-layers-half text-warning me-2 fs-5"></i> Lorem Ipsum Feature 1',
        "proj2_acc1_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit lacus nec metus.</p>
                            <p class="mb-2">• Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.</p>
                            <p class="mb-0">• Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.</p>`,
        "proj2_acc2_head": '<i class="bi bi-gear-wide-connected text-primary me-2 fs-5"></i> Lorem Ipsum Feature 2',
        "proj2_acc2_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum.</p>
                            <p class="mb-2">• Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                            <p class="mb-0">• Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio.</p>`,
        "proj2_acc3_head": '<i class="bi bi-shield-check text-success me-2 fs-5"></i> Lorem Ipsum Feature 3',
        "proj2_acc3_body": `<p class="mb-2">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante.</p>
                            <p class="mb-2">• Dui semper sapien, hendrerit gravida odio felis lacus. Morbi nec metus.</p>
                            <p class="mb-0">• Praesent sapien massa, convallis a, pellentesque nec, egestas non, nisi.</p>`,
        "proj2_role": "Role: Lorem Ipsum Developer",

        // Activities Section
        "activities_badge": '<i class="bi bi-people-fill me-1"></i> Activities & Events',
        "activities_title": "Activities & Extracurriculars",
        "activities_subtitle": "Academic events, community activities, and team projects participated in",
        "act1_title": "LOREM IPSUM - Activity Title 1",
        "act1_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "act1_role": "Role: Organizer / Team Member",
        "act2_title": "LOREM IPSUM - Activity Title 2",
        "act2_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "act2_role": "Role: Participant",

        // Footer & Scroll Button
        "scroll_top_title": "Scroll to top"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'vi';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    const langData = translations[lang];

    if (!langData) return;

    // Cập nhật tất cả các phần tử có thuộc tính data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key] !== undefined) {
            el.innerHTML = langData[key];
        }
    });

    // Cập nhật trạng thái nút chuyển đổi ngôn ngữ trên Navbar
    const langViCode = document.querySelector('.lang-code.lang-vi');
    const langEnCode = document.querySelector('.lang-code.lang-en');

    if (lang === 'en') {
        if (langViCode) langViCode.classList.remove('active');
        if (langEnCode) langEnCode.classList.add('active');
        document.documentElement.lang = 'en';
    } else {
        if (langEnCode) langEnCode.classList.remove('active');
        if (langViCode) langViCode.classList.add('active');
        document.documentElement.lang = 'vi';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Khởi tạo ngôn ngữ ban đầu từ LocalStorage
    setLanguage(currentLang);

    // Xử lý sự kiện click vào nút chuyển ngôn ngữ
    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", function () {
            const nextLang = currentLang === 'vi' ? 'en' : 'vi';
            setLanguage(nextLang);
        });
    }
});
