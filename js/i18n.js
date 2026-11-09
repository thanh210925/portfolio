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
        "skill1_title": "Backend & Database",
        "skill1_desc": "Tư duy logic hệ thống chặt chẽ, kiến trúc backend vững chắc và quản trị dữ liệu an toàn.",
        "skill2_title": "Giao Diện (UI)",
        "skill2_desc": "Xây dựng giao diện responsive, mượt mà và thân thiện với trải nghiệm người dùng.",
        "skill3_title": "Kiểm Thử & Công Cụ",
        "skill3_desc": "Quy trình kiểm thử chất lượng, quản lý mã nguồn linh hoạt và cộng tác dự án hiệu quả.",
        "skill_eng": "Tiếng Anh chuyên ngành",

        // Timeline Section (Học Vấn & Kinh Nghiệm)
        "timeline_badge": '<i class="bi bi-journal-bookmark-fill me-1"></i> Học Vấn & Kinh Nghiệm',
        "timeline_title": "Học Vấn & Kinh Nghiệm",
        "timeline_subtitle": "Hành trình tích lũy kiến thức chuyên ngành và rèn luyện kỹ năng lập trình thực chiến",
        "timeline1_year": "2023 - 2027",
        "timeline1_school": "Trường Đại học Ngoại Ngữ Tin học TPHCM (HUFLIT)",
        "timeline1_major": 'Chuyên ngành: <strong>Công Nghệ Phần Mềm</strong>',
        "timeline1_status": '<i class="bi bi-mortarboard-fill me-1"></i> Đang theo học',
        "timeline2_year": "07.2026 - 10.2026",
        "timeline2_title": "Công ty Cổ phần Công nghệ BrightStar",
        "timeline2_role": "Thực tập sinh - PHP / Laravel",
        "timeline2_desc": `
    <ul>
        <li>Phát triển và bảo trì các module website sử dụng PHP và Laravel framework.</li>
        <li>Phối hợp thiết kế, tối ưu giao diện người dùng (UI/UX) và tích hợp API mượt mà.</li>
        <li>Áp dụng các tiêu chuẩn Clean Code và cải thiện tốc độ tải trang.</li>
    </ul>
`,
        "timeline2_badge": '<i class="bi bi-check-circle-fill me-1"></i> Thực chiến',
        "timeline2_tag": "PHP / Laravel",

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
                            <p class="mb-2">• Machine Learning (K-Means & KNN): Xây dựng hệ thống gợi ý phim cá nhân hóa theo hành vi người dùng.</p>
                            <p class="mb-2">• Apriori Algorithm: Khai phá quy luật liên kết để gợi ý combo bắp nước tối ưu.</p>
                            <p class="mb-0">• Trợ lý ảo AI: Tích hợp Gemini AI API làm chatbot tư vấn lịch chiếu 24/7.</p>`,
        "proj1_acc3_head": '<i class="bi bi-credit-card text-success me-2 fs-5"></i> Thanh toán & Tính năng Quản trị',
        "proj1_acc3_body": `<p class="mb-2">• Tích hợp cổng thanh toán trực tuyến VietQR, VNPay và MoMo với cơ chế giữ/hủy chỗ thông minh.</p>
                            <p class="mb-2">• Quản lý lịch chiếu chống xung đột, phòng chiếu, mã giảm giá (Voucher Condition Engine).</p>
                            <p class="mb-0">• Tính lương nhân viên tự động dựa trên bảng công tháng và xuất vé điện tử kèm mã QR Code.</p>`,
        "proj1_role": "Vai trò: Backend & AI Integration Lead",

        "proj2_title": "MEILING COSMETICS – Nền Tảng TMĐT & Chăm Sóc Da AI",
        "proj2_desc": "Website thương mại điện tử mỹ phẩm cao cấp kết hợp AI Skincare Assistant và hệ thống đặt lịch soi da 3D & tư vấn bác sĩ da liễu.",
        "proj2_acc1_head": '<i class="bi bi-bag-check text-warning me-2 fs-5"></i> Thương Mại Điện Tử, Thanh Toán & Vận Chuyển',
        "proj2_acc1_body": `<p class="mb-2">• Xây dựng quy trình e-commerce toàn diện: Sản phẩm, giỏ hàng, wishlist, voucher giảm giá, đánh giá và đặt hàng hoàn chỉnh.</p>
                            <p class="mb-2">• Tích hợp đa dạng phương thức thanh toán trực tuyến: COD, VNPay và MoMo với cơ chế xử lý giao dịch an toàn.</p>
                            <p class="mb-0">• Tự động hóa vận chuyển: Tích hợp API Giao Hàng Nhanh (GHN) để tính phí giao hàng thời gian thực và quản lý đơn hàng.</p>`,
        "proj2_acc2_head": '<i class="bi bi-robot text-primary me-2 fs-5"></i> AI Skincare Assistant & Phân Tích Da Qua Hình Ảnh',
        "proj2_acc2_body": `<p class="mb-2">• AI Chatbot 24/7: Trợ lý AI hỗ trợ tư vấn chăm sóc da, giải đáp thắc mắc và tương tác trực tiếp với khách hàng.</p>
                            <p class="mb-2">• Phân tích da qua hình ảnh: Ứng dụng Gemini AI API phân tích tình trạng da từ ảnh chụp và lưu kết quả vào hồ sơ người dùng.</p>
                            <p class="mb-0">• Cá nhân hóa liệu trình: Gợi ý sản phẩm phù hợp từ cửa hàng và tự động xây dựng skincare routine tối ưu.</p>`,
        "proj2_acc3_head": '<i class="bi bi-calendar-check text-success me-2 fs-5"></i> Đặt Lịch Soi Da 3D & Admin Dashboard',
        "proj2_acc3_body": `<p class="mb-2">• Đặt lịch dịch vụ: Xây dựng quy trình đặt lịch soi da 3D VISIA và hẹn tư vấn bác sĩ da liễu cho khách hàng.</p>
                            <p class="mb-2">• Quản lý lịch hẹn đồng bộ: Giúp khách hàng và Admin theo dõi, điều phối và cập nhật trạng thái lịch hẹn suôn sẻ.</p>
                            <p class="mb-0">• Admin Dashboard toàn diện: Quản lý sản phẩm, đơn hàng, tồn kho, mã giảm giá, bài viết blog và lịch hẹn.</p>`,
        "proj2_role": "Vai trò: Backend & Integration Developer",

        // Activities Section (Hoạt Động & Sự Kiện)
        "activities_badge": '<i class="bi bi-people-fill me-1"></i> Hoạt Động & Ngoại Khóa',
        "activities_title": "Hoạt Động & Sự Kiện",
        "activities_subtitle": "Các hoạt động phong trào, sự kiện học thuật và dự án cộng đồng đã tham gia",
        "act1_title": "Rotaract Club of One Million Lives Saigon (RAC OMLS)",
        "act1_desc": `<ul class="activity-desc-list ps-3 mb-0 text-muted">
            <li class="mb-2">Đồng hành tổ chức và triển khai thành công 3 dự án trọng điểm hướng tới cộng đồng: <strong>MilkBank</strong>, <strong>Đập cầu - Gieo sữa</strong>, và <strong>Winter Donation</strong>.</li>
            <li class="mb-2">Lên kế hoạch, điều phối và góp phần vận hành trơn tru các hoạt động thiện nguyện, kết nối nguồn lực để hỗ trợ các hoàn cảnh khó khăn.</li>
            <li>Làm việc nhóm hiệu quả cùng tập thể ban chấp hành và cộng đồng tình nguyện viên nhằm lan tỏa các giá trị nhân văn.</li>
        </ul>`,
        "act1_role": "Vai trò: Ban Tổ Chức / Thành Viên",
        "act2_title": "Cộng tác viên thường trực Đoàn Khoa CNTT (Hậu cần)",
        "act2_desc": `<ul class="activity-desc-list ps-3 mb-0 text-muted">
            <li class="mb-2">Hỗ trợ lên kế hoạch, chuẩn bị hậu cần và trực tiếp tham gia tổ chức các sự kiện, phong trào sinh viên cấp khoa (như hội trại, hoạt động chào tân sinh viên, các cuộc thi học thuật).</li>
            <li class="mb-2">Phối hợp nhịp nhàng với Ban Chấp hành Đoàn khoa và các thành viên khác để điều phối chương trình diễn ra suôn sẻ, đúng tiến độ.</li>
            <li>Phát triển kỹ năng làm việc nhóm, quản lý thời gian và giải quyết vấn đề trong môi trường năng động, tập thể.</li>
        </ul>`,
        "act2_role": "Vai trò: Cộng tác viên Hậu cần",

        // Contact Section (Dev Terminal Suite)
        "contact_badge": '<i class="bi bi-chat-left-dots-fill me-1"></i> Liên Hệ & Hợp Tác',
        "contact_status": "SẮN SÀNG HỢP TÁC & TUYỂN DỤNG",
        "contact_title": "Khởi Đầu Dự Án Tiếp Theo Cùng Tôi",
        "contact_subtitle": "Dù bạn có ý tưởng dự án mới, vị trí tuyển dụng tiềm năng hay chỉ muốn kết nối giao lưu — tôi luôn sẵn sàng trò chuyện!",
        "contact_dev_quote": '"Đam mê xây dựng các hệ thống Web & AI hiệu năng cao, tối ưu trải nghiệm người dùng và tư duy lập trình hệ thống sạch."',
        "contact_call_label": "SỐ ĐIỆN THOẠI / ZALO",
        "contact_email_label": "EMAIL TRỰC TIẾP",
        "contact_loc_label": "KHU VỰC LÀM VIỆC",
        "contact_loc_val": "TP. Hồ Chí Minh, Việt Nam",
        "contact_social_label": "Kết nối với tôi",
        "contact_form_title": "Gửi tin nhắn cho tôi",
        "contact_form_sub": "Tôi sẽ phản hồi trong thời gian sớm nhất!",
        "form_name": "Họ và tên của bạn",
        "form_email": "Email liên hệ",
        "form_subject": "Chủ đề (Tuyển dụng / Dự án / Hợp tác)",
        "form_message": "Nội dung tin nhắn của bạn...",
        "contact_btn": "GỬI TIN NHẮN TỰ ĐỘNG",
        "contact_secure": "Thông tin của bạn được bảo mật tuyệt đối",

        // CV Preview Modal & Download Confirmation
        "cv_modal_title": "Xem trước CV - Băng Thanh",
        "cv_modal_subtitle": "Tài liệu: BANGTHANH.pdf",
        "cv_modal_open_tab": '<i class="bi bi-box-arrow-up-right me-1"></i> Mở tab mới',
        "cv_modal_close": "Đóng",
        "cv_modal_download_btn": '<i class="bi bi-download me-1"></i> Tải CV',
        "cv_confirm_title": "Xác nhận tải CV",
        "cv_confirm_question": "Bạn có muốn tải CV này không?",
        "cv_confirm_cancel": "Không",
        "cv_confirm_accept": '<i class="bi bi-download me-1"></i> Đồng ý tải',
        "cv_downloading_msg": "Đang bắt đầu tải xuống CV BANGTHANH.pdf...",
        "cv_modal_meta_update": '<i class="bi bi-check2-circle text-success me-1"></i> Bản cập nhật mới nhất',
        "cv_modal_meta_format": '<i class="bi bi-filetype-pdf text-danger me-1"></i> Định dạng PDF',
        "hero_cv_btn": '<i class="bi bi-file-earmark-pdf-fill me-1"></i> Xem & Tải CV',

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
        "skill1_title": "Backend & Database",
        "skill1_desc": "Strong architectural logic mindset, building robust backend architectures and secure database management.",
        "skill2_title": "Frontend (UI)",
        "skill2_desc": "Creating responsive, sleek, user-friendly interfaces with intuitive user experiences.",
        "skill3_title": "Testing & Tools",
        "skill3_desc": "Quality testing workflow, flexible version control management, and effective project collaboration.",
        "skill_eng": "Technical English",

        // Timeline Section
        "timeline_badge": '<i class="bi bi-journal-bookmark-fill me-1"></i> Education & Experience',
        "timeline_title": "Education & Experience",
        "timeline_subtitle": "My academic journey and practical software development experience",
        "timeline1_year": "2023 - 2027",
        "timeline1_school": "HUFLIT University (Ho Chi Minh City)",
        "timeline1_major": 'Major: <strong>Software Engineering</strong>',
        "timeline1_status": '<i class="bi bi-mortarboard-fill me-1"></i> Currently Studying',
        "timeline2_year": "07.2026 - 10.2026",
        "timeline2_title": "BrightStar Technology JSC",
        "timeline2_role": "PHP / Laravel Intern",
        "timeline2_desc": `
    <ul>
        <li>Developed and maintained website modules using PHP and Laravel framework.</li>
        <li>Collaborated on UI/UX optimization and seamless API integration.</li>
        <li>Applied Clean Code standards and improved page loading performance.</li>
    </ul>
`,
        "timeline2_badge": '<i class="bi bi-check-circle-fill me-1"></i> Hands-on Experience',
        "timeline2_tag": "PHP / Laravel",

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
                            <p class="mb-2">• Machine Learning (K-Means & KNN): Built personalized movie recommendation engine based on user behavior.</p>
                            <p class="mb-2">• Apriori Algorithm: Mined association rules for optimal concession combo upselling.</p>
                            <p class="mb-0">• AI Virtual Assistant: Integrated Gemini AI API as a 24/7 intelligent showtime chatbot.</p>`,
        "proj1_acc3_head": '<i class="bi bi-credit-card text-success me-2 fs-5"></i> Payments & Administration Features',
        "proj1_acc3_body": `<p class="mb-2">• Integrated VietQR, VNPay, and MoMo online payment gateways with smart seat hold/cancellation logic.</p>
                            <p class="mb-2">• Conflict-free showtime scheduling, auditorium management, and Voucher Condition Engine.</p>
                            <p class="mb-0">• Automated monthly staff payroll calculation and e-ticket generation with QR Codes.</p>`,
        "proj1_role": "Role: Backend & AI Integration Lead",

        "proj2_title": "MEILING COSMETICS – E-commerce & AI Skincare Platform",
        "proj2_desc": "Luxury cosmetic e-commerce platform integrating AI Skincare Assistant and 3D skin analysis & dermatologist consultation booking system.",
        "proj2_acc1_head": '<i class="bi bi-bag-check text-warning me-2 fs-5"></i> E-commerce, Payments & Logistics',
        "proj2_acc1_body": `<p class="mb-2">• Complete e-commerce workflow: Product catalog, cart, wishlist, coupon/voucher system, reviews, and order placement.</p>
                            <p class="mb-2">• Multi-channel online payments: Integrated COD, VNPay, and MoMo payment gateways with secure transaction processing.</p>
                            <p class="mb-0">• Automated shipping: Connected Giao Hàng Nhanh (GHN) API for real-time shipping calculation and order tracking.</p>`,
        "proj2_acc2_head": '<i class="bi bi-robot text-primary me-2 fs-5"></i> AI Skincare Assistant & Image Analysis',
        "proj2_acc2_body": `<p class="mb-2">• 24/7 AI Chatbot: Intelligent virtual assistant providing skin care consultations and answering user inquiries in real-time.</p>
                            <p class="mb-2">• AI Image Skin Analysis: Powered by Gemini AI API to analyze skin conditions from facial photos and save to user profiles.</p>
                            <p class="mb-0">• Personalized Skincare Routine: Automatically recommends matching store products and crafts tailored daily routines.</p>`,
        "proj2_acc3_head": '<i class="bi bi-calendar-check text-success me-2 fs-5"></i> 3D Skin Booking & Admin Dashboard',
        "proj2_acc3_body": `<p class="mb-2">• Service Booking Flow: Appointment scheduling system for 3D VISIA skin analysis and dermatologist consultations.</p>
                            <p class="mb-2">• Seamless Booking Management: Enables clients to track and Admins to manage and update appointment statuses easily.</p>
                            <p class="mb-0">• Comprehensive Admin Dashboard: Complete management of products, orders, inventory, vouchers, blogs, and appointments.</p>`,
        "proj2_role": "Role: Backend & Integration Developer",

        // Activities Section
        "activities_badge": '<i class="bi bi-people-fill me-1"></i> Activities & Events',
        "activities_title": "Activities & Extracurriculars",
        "activities_subtitle": "Academic events, community activities, and team projects participated in",
        "act1_title": "Rotaract Club of One Million Lives Saigon (RAC OMLS)",
        "act1_desc": `<ul class="activity-desc-list ps-3 mb-0 text-muted">
            <li class="mb-2">Co-organized and successfully executed 3 key community projects: <strong>MilkBank</strong>, <strong>Bridge Building - Milk Giving</strong>, and <strong>Winter Donation</strong>.</li>
            <li class="mb-2">Planned, coordinated, and contributed to the smooth operation of charity activities, connecting resources to support underprivileged communities.</li>
            <li>Collaborated effectively with the executive committee and volunteer network to spread humanistic values.</li>
        </ul>`,
        "act1_role": "Role: Organizer / Team Member",
        "act2_title": "Faculty of IT Youth Union Permanent Collaborator (Logistics)",
        "act2_desc": `<ul class="activity-desc-list ps-3 mb-0 text-muted">
            <li class="mb-2">Supported event planning, logistics preparation, and directly organized faculty-level student activities (camps, freshman welcome events, academic competitions).</li>
            <li class="mb-2">Coordinated smoothly with the Executive Committee of the Faculty Youth Union and team members to run events seamlessly and on schedule.</li>
            <li>Developed teamwork, time management, and problem-solving skills in a dynamic, collaborative environment.</li>
        </ul>`,
        "act2_role": "Role: Logistics Collaborator",

        // Contact Section (Dev Terminal Suite)
        "contact_badge": '<i class="bi bi-chat-left-dots-fill me-1"></i> Get In Touch',
        "contact_status": "READY FOR COLLABORATION & RECRUITMENT",
        "contact_title": "Start Your Next Project With Me",
        "contact_subtitle": "Whether you have a new project idea, a potential job opening, or just want to connect— I'm always open to chat!",
        "contact_dev_quote": '"Passionate about building high-performance Web & AI systems, optimizing user experience and clean code architecture."',
        "contact_call_label": "PHONE / ZALO",
        "contact_email_label": "DIRECT EMAIL",
        "contact_loc_label": "LOCATION",
        "contact_loc_val": "Ho Chi Minh City, Vietnam",
        "contact_social_label": "Connect with me",
        "contact_form_title": "Send Me A Message",
        "contact_form_sub": "I will respond as soon as possible!",
        "form_name": "Your Full Name",
        "form_email": "Your Contact Email",
        "form_subject": "Subject (Hiring / Project / Inquiry)",
        "form_message": "Your Message Content...",
        "contact_btn": "SEND AUTOMATIC MESSAGE",
        "contact_secure": "Your information is 100% secure",

        // CV Preview Modal & Download Confirmation
        "cv_modal_title": "CV Preview - Bang Thanh",
        "cv_modal_subtitle": "Document: BANGTHANH.pdf",
        "cv_modal_open_tab": '<i class="bi bi-box-arrow-up-right me-1"></i> Open in new tab',
        "cv_modal_close": "Close",
        "cv_modal_download_btn": '<i class="bi bi-download me-1"></i> Download CV',
        "cv_confirm_title": "Confirm CV Download",
        "cv_confirm_question": "Do you want to download this CV?",
        "cv_confirm_cancel": "Cancel",
        "cv_confirm_accept": '<i class="bi bi-download me-1"></i> Download Now',
        "cv_downloading_msg": "Starting download for BANGTHANH.pdf...",
        "cv_modal_meta_update": '<i class="bi bi-check2-circle text-success me-1"></i> Latest Version',
        "cv_modal_meta_format": '<i class="bi bi-filetype-pdf text-danger me-1"></i> PDF Format',
        "hero_cv_btn": '<i class="bi bi-file-earmark-pdf-fill me-1"></i> View & Download CV',

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
