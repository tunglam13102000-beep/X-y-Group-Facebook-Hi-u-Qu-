/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Network, 
  ShieldCheck, 
  Users, 
  FilePlus, 
  Hourglass, 
  Megaphone, 
  CheckCircle2, 
  Shield, 
  Zap, 
  MessageSquare, 
  TrendingUp, 
  DollarSign, 
  CircleDollarSign, 
  Clock, 
  Rocket, 
  Sparkles, 
  Headphones, 
  UserCheck, 
  Lock, 
  RefreshCw, 
  GraduationCap, 
  Gift,
  ArrowRight,
  Menu,
  Verified,
  Grid2X2,
  LayoutGrid,
  FileCheck,
  UserPlus,
  FileEdit,
  Repeat,
  Calendar,
  Star,
  Flame,
  CheckCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Send,
  MessageCircle,
  X,
  Target,
  Play
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, animate } from "motion/react";

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: duration });
    }
  }, [isInView, value, motionValue, duration]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when modal or lightbox is open
  useEffect(() => {
    if (isModalOpen || selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen, selectedImage]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-outline-variant/30 shadow-sm">
        <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto w-full">
          <a href="https://marketingtudong.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src="https://lh3.googleusercontent.com/d/12NU12aD977juHU_Vjo4l1qo9KCuBtlts" 
              alt="MKT Logo" 
              className="h-24 md:h-32 object-contain"
            />
          </a>
          
            <nav className="hidden md:flex gap-10 items-center">
              <a href="#solution" className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Giải Pháp</a>
              <a href="#features" className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Tính Năng</a>
              <a href="#benefits" className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Lợi Ích</a>
              <a href="#pricing" className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Báo Giá</a>
              <a href="#faq" className="text-[15px] font-semibold text-on-surface-variant hover:text-primary transition-colors">Hỏi Đáp</a>
            </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-[#0068ff] text-white px-10 py-4 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-lg animate-glow-blue-strong"
            >
              ĐĂNG KÝ
            </button>
            <button 
              className="md:hidden p-2 text-on-background hover:bg-surface-container rounded-lg transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant shadow-xl p-6 space-y-6"
          >
            <nav className="flex flex-col gap-6">
              {[
                { name: "Giải Pháp", href: "#solution" },
                { name: "Tính Năng", href: "#features" },
                { name: "Lợi Ích", href: "#benefits" },
                { name: "Báo Giá", href: "#pricing" },
                { name: "Hỏi Đáp", href: "#faq" }
              ].map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/30 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#0068ff] text-white py-5 rounded-2xl font-black text-xl shadow-lg"
            >
              ĐĂNG KÝ NGAY
            </button>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative px-6 pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-surface-container-lowest">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#0068ff] font-bold text-[10px] md:text-xs tracking-wider mb-6 border border-blue-100"
                >
                  <Verified className="h-4 w-4" />
                  500+ CÁ NHÂN, TỔ CHỨC KHÁCH HÀNG TIN DÙNG
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-7xl lg:text-[90px] font-black text-on-background mb-8 leading-[1.15] md:leading-[1.1] tracking-tighter font-display"
                >
                  Xây Group Facebook <br className="hidden md:block" /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0068ff] to-blue-700 drop-shadow-sm">Hiệu Quả &</span> <br /> <span className="text-[#ff3131] drop-shadow-sm">Chuyển Đổi</span>
                </motion.h1>
    
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold opacity-90 px-4 md:px-0"
                >
                  Giải pháp tự động hóa giúp bạn <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-extrabold text-xl md:text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">LÊN TOP TÌM KIẾM</span>, thu hút hàng tá khách hàng tiềm năng mà không tốn một đồng quảng cáo.
                </motion.p>
    
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0068ff] text-white px-8 md:px-10 py-5 rounded-2xl font-black text-lg md:text-xl shadow-[0_15px_30px_rgba(0,104,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group animate-glow-blue-strong"
                  >
                    NHẬN TƯ VẤN NGAY <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hỗ trợ 24/7</p>
                    <p className="text-lg font-black text-[#0068ff]">0814.438.268</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                {/* Visual accents */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-white/50 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-1">
                  <img 
                    src="https://i.postimg.cc/mk234r9Z/2d4dbfca-5020-4f99-80dd-834ba3b8bc06.png" 
                    alt="Infographic Facebook Search" 
                    className="w-full h-auto object-contain scale-105"
                  />
                </div>

                {/* Floating metric */}
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: [20, -20, 20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 md:right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20"
                >
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-on-background">TOP 1</p>
                    <p className="text-xs font-bold text-slate-500">TÌM KIẾM NHÓM</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 transform origin-top-right -z-10"></div>
        </section>

        {/* Problem Section */}
        <section className="bg-surface-container-lowest py-24 px-6 border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-background mb-6 font-display tracking-tight leading-tight">
              Kinh doanh trên Group Facebook <br className="hidden md:block" /> Bạn có đang gặp những rào cản này?
            </h2>
            <p className="text-on-surface-variant font-bold mb-16 tracking-[0.1em] uppercase text-sm opacity-60">
              Những khó khăn phổ biến nhất khi xây dựng cộng đồng
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Users, title: "Không biết cách xây", desc: "Group lập ra không có đề xuất, không có tương tác, không có người đăng bài.", color: "text-red-500" },
                { icon: FilePlus, title: "Tỉ lệ chuyển đổi thấp", desc: "Xây nhóm Facebook nhưng không có chuyển đổi hoặc chuyển đổi rất thấp.", color: "text-orange-500" },
                { icon: Hourglass, title: "Tốn thời gian", desc: "Xây nhóm vừa mất thời gian, vừa tốn nhiều nhân sự mà không tối ưu hiệu quả.", color: "text-blue-500" },
                { icon: Megaphone, title: "Phụ thuộc quảng cáo", desc: "Chạy ads liên tục để kéo thành viên nhưng ngừng ads là ngừng tăng trưởng.", color: "text-green-500" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8 }}
                  className="p-6 md:p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-md transition-all text-center md:text-left"
                >
                  <item.icon className={`h-10 w-10 md:h-12 md:w-12 mx-auto md:mx-0 ${item.color} mb-6`} />
                  <h3 className="text-lg md:text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="solution" className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <span className="text-primary font-bold tracking-wider text-xs mb-4 block uppercase font-mono">
                  Chiến lược xây Group mới nhất 2026
                </span>
                <h2 className="text-3xl md:text-6xl font-black text-on-background mb-8 tracking-tighter uppercase font-display leading-[1.1]">
                  Giải Pháp Xây Group <br /> Thực Chiến 2026
                </h2>
                <p className="text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Tùng Lâm MKT cung cấp quy trình xây Group Facebook chuẩn thuật toán nền tảng giúp bạn làm chủ cộng đồng hoàn toàn tự động.
                </p>
                
                <div className="space-y-6 flex flex-col items-center lg:items-start">
                  {[
                    "Chuẩn thuật toán nền tảng Facebook 2026",
                    "Giúp tăng đề xuất phát triển nhóm dễ dàng",
                    "Làm chủ công thức xây nhóm bền vững"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-on-background text-sm md:text-base">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative mt-12 lg:mt-0">
                {[
                  { icon: Shield, title: "Tối ưu chuẩn SEO", desc: "Nghiên cứu từ khoá, đặt tên chuẩn thuật toán đề xuất.", delay: 0, step: "Bước 1" },
                  { icon: "https://www.shutterstock.com/image-illustration/team-icon-leader-260nw-1066354916.jpg", title: "Buff mem thật", desc: "Tăng trưởng thành viên chất lượng không bị quét.", delay: 0.1, step: "Bước 2" },
                  { icon: Zap, title: "Đẩy tương tác", desc: "Phần mềm tự động tăng bài và tương tác thực.", delay: 0.2, step: "Bước 3" },
                  { icon: TrendingUp, title: "Khai thác cao", desc: "Chiến lược bán hàng & chuyển đổi thành đơn hàng.", delay: 0.3, step: "Bước 4" }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: feature.delay }}
                    className={`bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all relative ${i % 2 !== 0 ? 'mt-8' : ''}`}
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                      {feature.step}
                    </div>
                    {typeof feature.icon === 'string' ? (
                      <img src={feature.icon} alt={feature.title} className="h-12 w-12 object-contain mb-4 rounded-lg" />
                    ) : (
                      <feature.icon className="h-10 w-10 text-primary-container mb-4" />
                    )}
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits CTA */}
        <section id="benefits" className="bg-primary py-16 md:py-24 px-6 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative group order-last md:order-first"
            >
              <img 
                src="https://i.postimg.cc/MK0jPMp3/673990507-1465039338752272-3635522735969786239-n.jpg" 
                alt="Support Team" 
                className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </motion.div>
            
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-10 md:mb-12 tracking-tight leading-[1.2] md:leading-[1.1] font-display">
                Đặc quyền vượt trội từ giải pháp của <br className="hidden md:block" /> Tùng Lâm MKT
              </h2>
              <div className="grid gap-6 md:gap-8">
                {[
                  { icon: CircleDollarSign, text: "Hệ thống khách hàng khai thác bền vững" },
                  { icon: Rocket, text: "Không cần chạy Ads vẫn xây được nhóm triệu mem" },
                  { icon: Clock, text: "Vận hành đơn giản với chỉ 01 nhân sự & 01 máy tính" },
                  { icon: Sparkles, text: "Chỉ với 30 ngày bạn đã có cộng đồng traffic cực khủng" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-5"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/20">
                      <item.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold opacity-90 text-center md:text-left">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Software Features - Replacing Social Proof */}
        <section id="features" className="py-16 md:py-24 px-6 bg-surface-container-low border-b border-outline-variant/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="text-center mb-12 md:mb-16 px-4">
              <h2 className="text-3xl md:text-6xl font-black text-on-background mb-6 font-display tracking-tighter uppercase leading-none">Vận hành nhóm <br className="md:hidden" /> <span className="text-primary">Tự động</span></h2>
              <div className="inline-block px-6 md:px-8 py-3 rounded-full bg-primary/10 text-primary font-bold text-xs md:text-sm tracking-wide leading-tight">
                Hệ sinh thái phần mềm hỗ trợ xây dựng cộng đồng 4.0
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Card 1: Management */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 md:p-10 rounded-[2rem] border border-outline-variant/30 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
                    <Grid2X2 className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-on-background">Quản lý & Vận hành Group</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Users, text: "Nuôi và quản lý không giới hạn số lượng tài khoản Facebook" },
                    { icon: LayoutGrid, text: "Tạo group Facebook hàng loạt" },
                    { icon: FileCheck, text: "Tự động phê duyệt bài viết, quản lý các bài viết" },
                    { icon: UserPlus, text: "Tự động phê duyệt thành viên, tương tác thành viên" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 md:p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-outline-variant/50 flex items-center justify-center group-hover:border-primary/30 transition-colors shrink-0">
                        <item.icon className="h-4 w-4 md:h-5 md:w-5 text-on-surface-variant font-bold" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-on-surface-variant leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Card 2: Growth */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 md:p-10 rounded-[2rem] border border-outline-variant/30 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#9d4300] rounded-xl flex items-center justify-center text-white shrink-0">
                    <Rocket className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-on-background">Nuôi & Phát triển Group</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FileEdit, text: "Tăng số lượng bài viết cho group Facebook" },
                    { icon: Zap, text: "Tăng tương tác cho group Facebook" },
                    { icon: Repeat, text: "Kéo thành viên từ group đối thủ về group đang xây" },
                    { icon: TrendingUp, text: "Làm group tối ưu và cắn đề xuất từ nền tảng" },
                    { icon: Calendar, text: "Đăng tải nội dung, lập lịch, tự động chăm sóc" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 md:p-4 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors group">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-outline-variant/50 flex items-center justify-center group-hover:border-secondary/30 transition-colors shrink-0">
                        <item.icon className="h-4 w-4 md:h-5 md:w-5 text-on-surface-variant" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-on-surface-variant leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            

          </div>
        </section>

        {/* YouTube Strategy Video */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-on-background mb-12 tracking-tighter font-display uppercase"
            >
              Chiến lược xây dựng <br /> cộng đồng triệu mem
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white group cursor-pointer bg-black"
              onClick={() => setIsVideoPlaying(true)}
            >
              {isVideoPlaying ? (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/mICAqAdgTXM?autoplay=1" 
                  title="Cách Xây Group Facebook Hiệu Quả Nhất 2025" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img 
                    src="https://img.youtube.com/vi/mICAqAdgTXM/maxresdefault.jpg" 
                    alt="YouTube Video Thumbnail" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="h-8 w-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </>
              )}
              
              {/* Decorative elements around the video */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-container/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-on-surface-variant font-semibold">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/20">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs">HD 1080p</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/20">
                <Zap className="h-3 w-3 text-primary" />
                <span className="text-xs">Chiến lược thực chiến</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback & Numbers Section - Replacing Why Choose Us */}
        <section className="py-24 px-6 bg-white overflow-hidden border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            {/* Numbers Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
              {[
                { number: 500, suffix: "+", label: "Khách hàng áp dụng" },
                { number: 100, suffix: "+", label: "Group >20.000 mem" },
                { number: 15, suffix: "+", label: "Ngành hàng khác nhau" },
                { number: 80, suffix: "%", label: "Tiết kiệm phí Ads" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3 tracking-tighter font-display">
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-on-surface-variant font-bold text-[10px] md:text-sm uppercase tracking-wide leading-tight px-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 md:p-10 rounded-[2rem] border border-outline-variant/30 flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-sm hover:shadow-md transition-all items-center md:items-start text-center md:text-left"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4ygEtTERcaiPrG4Eyc8htZNhMGcJVFg2kw&s" alt="Anh Minh Tuấn" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-[#9d4300] text-[#9d4300]" />)}
                  </div>
                  <p className="text-sm md:text-base text-on-surface-variant font-semibold italic mb-6 leading-relaxed">
                    "Trước đây mình tốn 20-30tr tiền ads mỗi tháng. Từ khi áp dụng quy trình build group, lượng khách về đều đặn mà không tốn xu nào."
                  </p>
                  <div className="text-sm">
                    <span className="font-black text-on-background">Anh Minh Tuấn</span> 
                    <span className="text-on-surface-variant opacity-60 block md:inline-block md:ml-2">— Tổng kho sỉ phụ kiện điện thoại</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 md:p-10 rounded-[2rem] border border-outline-variant/30 flex flex-col md:flex-row gap-6 md:gap-8 bg-white shadow-sm hover:shadow-md transition-all items-center md:items-start text-center md:text-left"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white shrink-0">
                  <img src="https://photo.znews.vn/w660/Uploaded/kbd_pilk/2022_09_22/tieu_long_nu1.jpg" alt="Chị Hoàng Lan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-4 w-4 fill-[#9d4300] text-[#9d4300]" />)}
                  </div>
                  <p className="text-sm md:text-base text-on-surface-variant font-semibold italic mb-6 leading-relaxed">
                    "Quy trình tự động hóa thực sự giúp ích rất nhiều. Mình quản trị 5 group lớn chỉ mất 30p mỗi ngày."
                  </p>
                  <div className="text-sm">
                    <span className="font-black text-on-background">Chị Hoàng Lan</span> 
                    <span className="text-on-surface-variant opacity-60 block md:inline-block md:ml-2">— Agency Marketing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Showcase Section - Bento Grid Style */}
        <section id="results" className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-7xl font-black text-on-background mb-4 uppercase tracking-tighter font-display">
                Thành quả thực tế
              </h2>
              <div className="h-2 w-24 bg-[#0068ff] mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto uppercase tracking-widest">
                Dữ liệu thực tế từ các cộng đồng chúng tôi đã xây dựng thành công
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[160px] md:auto-rows-[250px]">
              {[
                { url: "https://i.postimg.cc/bvMR0jWK/z7719889504210-000-4cff95fe76a1a2da53854f84ae433760.jpg", className: "md:col-span-2 md:row-span-2" },
                { url: "https://i.postimg.cc/pd7BQt3t/z7719889504210-001-09abfa38d5a3db31d9913de442ae96e6.jpg", className: "md:col-span-2 md:row-span-1" },
                { url: "https://i.postimg.cc/BvyC5GRs/z7719889504210-002-9a228797e75c1200f9328644dc6952a5.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/bvMR0j4f/z7719889504210-003-e5804f4b6d360bafc2586d55dfb603f4.jpg", className: "md:col-span-1 md:row-span-2" },
                { url: "https://i.postimg.cc/0N3CGqhv/z7719889504210-004-7f75bff382edb8453ac20bf134d12ce9.jpg", className: "md:col-span-2 md:row-span-1" },
                { url: "https://i.postimg.cc/j574ZFY9/z7719889504210-005-4dfc9e2bb3b96fe8a04f59e7e2dfb59f.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/k5ZyNdLq/z7719889504210-006-083caf985530f06ec9abb47f2df76d46.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/QtTJ0yZz/z7719889504210-007-ae34e6decd3152d1b931c64dbeb26439.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/C1qsmQpX/z7719889504210-008-220f2bb575b13c3b4222f3f61c23ec89.jpg", className: "md:col-span-2 md:row-span-1" },
                { url: "https://i.postimg.cc/mDHy85Gf/z7719889504210-009-299cc74c017b10cc9d05154292589693.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/B6KBMVGf/z7719889504210-010-fe45b1116d152a9ff58a85ce74fdb645.jpg", className: "md:col-span-1 md:row-span-1" },
                { url: "https://i.postimg.cc/j574ZFrr/z7719889504210-011-6a48375e746620c8fd9e2c545c87195d.jpg", className: "md:col-span-1 md:row-span-1" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedImage(item.url)}
                  className={`rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all bg-slate-50 group cursor-zoom-in ${item.className}`}
                >
                  <img 
                    src={item.url} 
                    alt={`Kết quả ${i + 1}`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    style={{ 
                      imageRendering: '-webkit-optimize-contrast',
                      filter: 'contrast(1.1) brightness(1.02) saturate(1.1)',
                      backfaceVisibility: 'hidden'
                    }} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal for Results */}
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-7xl w-full max-h-[85vh] overflow-auto rounded-xl shadow-2xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Kết quả chi tiết" 
                className="w-full h-auto block shadow-2xl"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </motion.div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              Click ra ngoài để đóng
            </div>
          </motion.div>
        )}

        {/* Comprehensive Strategy Package Section */}
        <section id="pricing" className="py-24 px-6 bg-surface-container-lowest">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden border border-primary-container shadow-2xl bg-white relative"
          >
            {/* Header Title Bar */}
            <div className="bg-primary text-white text-center py-8 px-6">
              <p className="text-base font-black uppercase tracking-[0.2em] mb-3">Gói chiến lược toàn diện</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">XÂY GROUP FACEBOOK TỪ 0 → 100K MEMBER</h2>
            </div>

            <div className="p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 items-start">
                {/* Left: Content */}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-6 pb-2 border-b-2 border-primary/10 inline-block">Nội dung bao gồm:</h3>
                  <div className="space-y-4 md:space-y-5 text-left">
                    {[
                      "Quy trình xây Group 0-100k member",
                      "Phần mềm xây Group Facebook tự động",
                      "Nhóm support hướng dẫn 1 - 1 đồng hành suốt thời gian sử dụng"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="font-semibold text-on-surface-variant text-sm md:text-base leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Bonus Box */}
                <div className="bg-[#fdf7f2] p-6 md:p-8 rounded-2xl border border-secondary/10">
                  <h3 className="text-lg font-bold text-secondary mb-6">Siêu Bonus Độc Quyền:</h3>
                  <div className="space-y-4 md:space-y-5 text-left">
                    {[
                      { icon: <Flame className="h-5 w-5 text-orange-500 fill-orange-500/20" />, text: "Bộ tài liệu xu hướng 2026" },
                      { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: "Checklist triển khai hàng ngày" },
                      { icon: <BookOpen className="h-5 w-5 text-red-400" />, text: "Kho kịch bản Content" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="shrink-0">{item.icon}</div>
                        <span className="font-bold text-on-surface-variant text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-outline-variant/30 w-full mb-10" />

              {/* Pricing & CTA */}
              <div className="text-center">
                <div className="text-on-surface-variant font-bold text-lg mb-2">Giá gốc: <span className="line-through opacity-60">16.000.000 VNĐ</span></div>
                <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-4 font-display">
                  <span className="text-4xl md:text-7xl font-black text-on-background tracking-tighter">9.000.000</span>
                  <span className="text-sm md:text-xl font-bold text-on-background opacity-70">VNĐ/NĂM</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-secondary font-bold mb-10 text-sm md:text-base animate-pulse">
                  <Zap className="h-5 w-5 fill-secondary" />
                  <span>Ưu đãi chỉ dành cho 10 người đăng ký đầu tiên!</span>
                </div>

                <a 
                  href="https://zalo.me/0814438268"
                  target="_blank"
                  rel="no-referrer"
                  className="w-full bg-[#ff3131] text-white py-6 rounded-2xl font-black text-2xl shadow-xl shadow-red-500/50 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center animate-glow-red"
                >
                  Nhận ưu đãi ngay
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section - Replacing Final CTA */}
        <section id="faq" className="py-16 md:py-24 px-6 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-12 md:text-center text-left tracking-tighter">Câu hỏi thường gặp</h2>
            
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  q: "Phần mềm có dễ sử dụng không?",
                  a: "Phần mềm được thiết kế với giao diện thân thiện, trực quan, rất dễ sử dụng ngay cả với người mới bắt đầu. Chúng tôi cũng có đội ngũ hỗ trợ 1-1 để hướng dẫn bạn."
                },
                {
                  q: "Phần mềm chạy trên thiết bị nào?",
                  a: "Tính tới thời điểm hiện tại, phần mềm có thể được cài đặt sử dụng trên laptop, PC hệ điều hành Windows (từ Windows 10 trở về sau)."
                },
                {
                  q: "Có được hỗ trợ trong quá trình sử dụng không?",
                  a: "Bạn sẽ được chuyên gia và bộ phận support hỗ trợ suốt quá trình sử dụng. Chuyên gia sẽ cố vấn chiến lược và chuyển giao quy trình cho riêng doanh nghiệp của bạn."
                },
                {
                  q: "Phần mềm xây group facebook có bản dùng thử không?",
                  a: "Các bạn sẽ được trải nghiệm phần mềm qua bản demo trên máy tính nhân sự công ty. Phần mềm là 1 phần của giải pháp xây group facebook bao gồm quy trình triển khai, biểu thời gian thực hiện và kế hoạch ứng dụng riêng cho từng doanh nghiệp. Vì vậy MKT Software rất cần thấu hiểu mục đích xây hệ thống của bạn để hỗ trợ tốt nhất."
                }
              ].map((item, index) => {
                const [isOpen, setIsOpen] = useState(index === 0);
                
                return (
                  <motion.div 
                    key={index}
                    initial={false}
                    className="border border-outline-variant/50 rounded-2xl overflow-hidden bg-white shadow-sm"
                  >
                    <button 
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-surface-container-low transition-colors ${index === 0 ? 'animate-glow-blue-strong z-10' : ''}`}
                    >
                      <span className="font-bold text-base md:text-xl text-on-background">{item.q}</span>
                      {isOpen ? <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-on-surface-variant shrink-0" /> : <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-on-surface-variant shrink-0" />}
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-outline-variant/30 mt-0">
                        <p className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed bg-surface-container-low/30 p-4 rounded-xl">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-20 text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  animate={{ 
                    x: [0, -1, 1, -1, 1, 0],
                    rotate: [0, -1, 1, -1, 1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-[0_15px_30px_rgba(220,38,38,0.4)] transition-all uppercase tracking-tight"
                >
                  Nhận tư vấn ngay
                </motion.button>
              </div>
              <div className="mt-12 flex items-center justify-center gap-3 text-secondary font-bold text-lg">
                <Headphones className="h-7 w-7" />
                <span>Tư vấn trực tiếp: 0814.438.268</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Image 1 Style */}
        <section className="py-24 px-6 bg-primary overflow-hidden relative">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
              Đừng tiếp tục mất tiền vào quảng cáo vô nghĩa
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-12">
              Tham gia ngay để sở hữu cỗ máy bán hàng tự động của riêng bạn.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-primary px-8 py-4 rounded-xl font-black text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg"
              >
                <Zap className="h-5 w-5 fill-primary" />
                NHẬN TƯ VẤN NGAY
              </button>
              
              <a 
                href="https://t.me/tunglammkt" 
                target="_blank"
                rel="no-referrer"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Send className="h-5 w-5" />
                Telegram
              </a>
              
              <a 
                href="https://zalo.me/0814438268" 
                target="_blank"
                rel="no-referrer"
                className="bg-[#0068ff] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 hover:scale-105 transition-all flex items-center gap-3 shadow-lg"
              >
                <img 
                  src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" 
                  alt="Zalo Logo" 
                  className="h-6 w-6 object-contain"
                />
                Zalo
              </a>
            </div>
          </div>

          {/* Background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-40 -mb-40"></div>
        </section>
      </main>

      {/* Modal - Image 2 Style */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-fit md:min-h-[600px] my-auto"
          >
            {/* Left Side: Information */}
            <div className="w-full md:w-1/2 bg-[#1a237e] p-8 md:p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-black italic mb-6 tracking-wider">ĐỪNG BỎ LỠ!</h2>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-container bg-white/20 rounded-full p-0.5 shrink-0" />
                    <p className="text-xs md:text-sm font-medium">Hỗ trợ 24/7, hướng dẫn <span className="text-cyan-400 font-bold uppercase tracking-tighter">TẬN TÌNH</span> đến khi bạn thành thạo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-container bg-white/20 rounded-full p-0.5 shrink-0" />
                    <p className="text-xs md:text-sm font-medium">Huấn luyện <span className="text-cyan-400 font-bold uppercase">CHIẾN LƯỢC</span> với đội ngũ chuyên gia giàu kinh nghiệm</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg hidden md:block">
                  <img 
                    src="https://i.postimg.cc/MK0jPMp3/673990507-1465039338752272-3635522735969786239-n.jpg" 
                    alt="Success" 
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4 md:space-y-6">
                <div className="bg-primary/30 border border-white/20 py-2.5 md:py-3 rounded-xl text-center font-bold text-xs md:text-sm tracking-tight">
                  +100.000 Khách hàng đã phục vụ
                </div>
                
                <div className="flex gap-3 md:gap-4 justify-between">
                  {[
                    { type: 'image', value: 'https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Yody-Slogan-Yellow.png' },
                    { type: 'image', value: 'https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_logos/6jNY0t54wAUucgxq0wl8ULNMB0fPIMaU_1663141524____cc60d5626e8726f515ba88b0bf0db9be.jpg' },
                    { type: 'image', value: 'https://tradefast.vn/upload/assets/fm/20230717/cjec-darkbg-doc.png' }
                  ].map((brand, i) => (
                    <div key={i} className="bg-white/90 text-[#1a237e] px-2 md:px-4 py-2 rounded-lg text-center flex-1 flex items-center justify-center min-h-[36px] md:min-h-[44px]">
                      <img src={brand.value} alt="Brand" className="max-h-6 md:max-h-8 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Contact */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center items-center relative text-center bg-white">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-8 md:mb-10">
                <p className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-3 md:mb-4">HỖ TRỢ & TƯ VẤN NHANH CHÓNG</p>
                <h3 className="text-3xl md:text-5xl font-black text-[#1a237e] tracking-tighter uppercase">LIÊN HỆ NGAY</h3>
              </div>

              <div className="w-full space-y-4 md:space-y-6">
                <a 
                  href="https://t.me/tunglammkt" 
                  target="_blank"
                  rel="no-referrer"
                  className="w-full bg-[#3478fe] text-white p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-4 md:gap-6 shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all text-left"
                >
                  <div className="bg-white/20 p-2 md:p-2.5 rounded-lg md:rounded-xl">
                    <Send className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase opacity-80 mb-0.5">TELEGRAM</p>
                    <p className="text-lg md:text-xl font-black">@tunglammkt</p>
                  </div>
                </a>

                <a 
                  href="https://zalo.me/0814438268" 
                  target="_blank"
                  rel="no-referrer"
                  className="w-full bg-[#0068ff] text-white p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-4 md:gap-6 shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all text-left"
                >
                  <div className="bg-white p-1 rounded-lg md:rounded-xl">
                    <img 
                      src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" 
                      alt="Zalo" 
                      className="h-8 w-8 md:h-11 md:w-11 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase opacity-80 mb-0.5">ZALO</p>
                    <p className="text-lg md:text-xl font-black tracking-widest">0814.438.268</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white text-on-surface-variant/80 py-16 px-6 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <img 
                src="https://lh3.googleusercontent.com/d/12NU12aD977juHU_Vjo4l1qo9KCuBtlts" 
                alt="MKT Logo" 
                className="h-28 md:h-32 object-contain"
              />
            </div>
            <p className="text-slate-500 font-medium text-sm">
              © 2026 MKT Software. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "Privacy Policy", 
              "Terms of Service", 
              "Contact Support", 
              "Affiliate Program"
            ].map(link => (
              <a 
                key={link} 
                href="#" 
                className="font-bold text-sm text-slate-500 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
