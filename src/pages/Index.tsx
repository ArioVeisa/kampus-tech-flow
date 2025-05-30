
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Users, 
  Code, 
  Shield, 
  Smartphone, 
  Globe, 
  Brain,
  Target,
  BookOpen,
  Award,
  Heart,
  Mail,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const [selectedPath, setSelectedPath] = useState("cybersecurity");

  const learningPaths = {
    cybersecurity: {
      title: "Cybersecurity",
      icon: Shield,
      color: "bg-red-500",
      description: "Keamanan siber dan ethical hacking",
      skills: ["Penetration Testing", "Security Auditing", "OWASP", "Cloud Security", "Incident Response"],
      projects: ["Security Assessment Web App", "Vulnerability Scanner", "Security Monitoring Dashboard"]
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      color: "bg-green-500",
      description: "Android Native & Flutter development",
      skills: ["Kotlin", "Flutter", "Firebase", "Android Architecture", "UI/UX Mobile"],
      projects: ["E-commerce App", "Social Media App", "IoT Control App"]
    },
    web: {
      title: "Web Development",
      icon: Globe,
      color: "bg-blue-500",
      description: "Frontend & Backend web development",
      skills: ["Angular", "React", "Node.js", "Cloud Functions", "PWA"],
      projects: ["Progressive Web App", "E-learning Platform", "Real-time Chat App"]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "bg-yellow-500",
      description: "Machine Learning dan Artificial Intelligence",
      skills: ["TensorFlow", "AutoML", "NLP", "Computer Vision", "MLOps"],
      projects: ["Chatbot AI", "Image Recognition System", "Recommendation Engine"]
    }
  };

  const programs = [
    {
      title: "Study Jams",
      description: "Kelompok belajar rutin dengan kurikulum Google",
      frequency: "Mingguan/Dua Mingguan",
      icon: BookOpen
    },
    {
      title: "Workshop Intensif",
      description: "Sesi mendalam dengan pembicara ahli",
      frequency: "Bulanan",
      icon: Code
    },
    {
      title: "Tech Talks",
      description: "Sharing session tentang tren teknologi terbaru",
      frequency: "Bulanan",
      icon: Users
    },
    {
      title: "Build with Google Tech Days",
      description: "Kolaborasi membuat proyek mini",
      frequency: "Per Semester",
      icon: Target
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg"></div>
              <span className="font-bold text-xl text-slate-800">GDG Campus TelU</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('learning-paths')} className="text-slate-600 hover:text-blue-600 transition-colors">Learning Paths</button>
              <button onClick={() => scrollToSection('programs')} className="text-slate-600 hover:text-blue-600 transition-colors">Program</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Kontak</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="pt-20 pb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Google Developer Group Campus
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Bangun Masa Depan
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent block">
                Teknologi Bersama
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Komunitas mahasiswa Telkom University Surabaya yang berfokus pada pengembangan skill teknologi Google terdepan dalam Cybersecurity, Mobile, Web, dan AI/ML.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection('learning-paths')}
              >
                Mulai Belajar
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Bergabung Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Tentang GDG Campus TelU</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Memberdayakan mahasiswa dengan pengetahuan teknologi Google yang relevan dengan kebutuhan industri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Menjadi pusat komunitas teknologi Google terdepan dan inovatif di Telkom University Surabaya
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-slate-800">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Menyelenggarakan kegiatan edukatif, memfasilitasi sertifikasi, dan membangun jaringan industri
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-slate-800">Tujuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Menghasilkan lulusan yang siap bersaing dengan kompetensi teknis sesuai standar industri
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="learning-paths" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Learning Paths Unggulan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pilih jalur pembelajaran yang sesuai dengan minat dan tujuan kariermu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(learningPaths).map(([key, path]) => {
              const IconComponent = path.icon;
              return (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-300 border-0 shadow-lg hover:shadow-xl ${
                    selectedPath === key ? 'ring-2 ring-blue-500 transform scale-105' : ''
                  }`}
                  onClick={() => setSelectedPath(key)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${path.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-slate-800">{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Selected Path Details */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${learningPaths[selectedPath].color} rounded-lg flex items-center justify-center`}>
                  {(() => {
                    const IconComponent = learningPaths[selectedPath].icon;
                    return <IconComponent className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <CardTitle className="text-2xl text-slate-800">{learningPaths[selectedPath].title}</CardTitle>
                  <CardDescription className="text-lg">{learningPaths[selectedPath].description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Skill Industri yang Dipelajari:</h4>
                  <div className="flex flex-wrap gap-2">
                    {learningPaths[selectedPath].skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Contoh Proyek:</h4>
                  <ul className="space-y-2">
                    {learningPaths[selectedPath].projects.map((project, index) => (
                      <li key={index} className="flex items-center space-x-2 text-slate-600">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Program & Kegiatan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Beragam kegiatan edukatif yang dirancang untuk mengembangkan kompetensi teknologi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-slate-800">{program.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{program.frequency}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Special Events */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-green-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Acara Khusus & Unggulan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">DevFest TelU Surabaya</h4>
                  <p className="text-blue-100">Festival developer tahunan dengan pembicara nasional/internasional</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution Challenge</h4>
                  <p className="text-blue-100">Partisipasi dalam kompetisi Google Solution Challenge</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hackathon Internal</h4>
                  <p className="text-blue-100">Kompetisi inovasi untuk mendorong kreativitas anggota</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Bergabung dengan Komunitas</h2>
            <p className="text-xl text-slate-600 mb-8">
              Mulai perjalanan pembelajaran teknologi Google bersama kami
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Siap untuk Memulai?</h3>
                  <p className="text-slate-600 mb-6">
                    Daftarkan diri Anda untuk mendapatkan informasi terbaru tentang kegiatan, workshop, dan program pembelajaran kami.
                  </p>
                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>gdg.campus.telkomsby@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>Telkom University Surabaya</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white py-4 text-lg"
                  >
                    Daftar Sekarang
                  </Button>
                  <p className="text-sm text-slate-500 mt-3">
                    Gratis untuk semua mahasiswa Telkom University Surabaya
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg"></div>
              <span className="font-bold text-xl">GDG Campus TelU Surabaya</span>
            </div>
            <p className="text-slate-400 mb-6">
              Google Developer Group Campus Telkom University Surabaya
            </p>
            <p className="text-slate-500 text-sm">
              © 2025 GDG Campus Telkom University Surabaya. Dibuat dengan ❤️ untuk komunitas teknologi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
