
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5_XhSNGzy4tRhASC3Di1soydMnv_UpLlcw&s" 
                alt="Google Logo" 
                className="w-8 h-8" 
              />
              <span className="font-medium text-xl text-gray-700">GDG Campus TelU</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Tentang</button>
              <button onClick={() => scrollToSection('learning-paths')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Learning Paths</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Program</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Kontak</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="pt-20 pb-16">
            <Badge className="mb-6 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-50">
              Google Developer Group Campus
            </Badge>
            <h1 className="text-5xl md:text-6xl font-normal text-gray-900 mb-6 leading-tight">
              Bangun Masa Depan
              <span className="block">
                <span className="text-blue-600">Tek</span>
                <span className="text-red-500">no</span>
                <span className="text-yellow-500">lo</span>
                <span className="text-blue-600">gi</span>
                <span className="text-green-500"> Bersama</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Komunitas mahasiswa Telkom University Surabaya yang berfokus pada pengembangan skill teknologi Google terdepan dalam Cybersecurity, Mobile, Web, dan AI/ML.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium rounded-md shadow-sm"
                onClick={() => scrollToSection('learning-paths')}
              >
                Mulai Belajar
              </Button>
              <Link to="/daftar">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-medium rounded-md w-full"
                >
                  Bergabung Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Tentang GDG Campus TelU</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Memberdayakan mahasiswa dengan pengetahuan teknologi Google yang relevan dengan kebutuhan industri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 font-medium">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-normal">
                  Menjadi pusat komunitas teknologi Google terdepan dan inovatif di Telkom University Surabaya
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-gray-900 font-medium">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-normal">
                  Menyelenggarakan kegiatan edukatif, memfasilitasi sertifikasi, dan membangun jaringan industri
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-gray-900 font-medium">Tujuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-normal">
                  Menghasilkan lulusan yang siap bersaing dengan kompetensi teknis sesuai standar industri
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="learning-paths" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Learning Paths Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Pilih jalur pembelajaran yang sesuai dengan minat dan tujuan kariermu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(learningPaths).map(([key, path]) => {
              const IconComponent = path.icon;
              return (
                <Card 
                  key={key}
                  className={`cursor-pointer transition-all duration-200 border-0 shadow-sm hover:shadow-md ${
                    selectedPath === key ? 'ring-2 ring-blue-500 shadow-md' : ''
                  }`}
                  onClick={() => setSelectedPath(key)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${path.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-gray-900 font-medium">{path.title}</CardTitle>
                    <CardDescription className="text-gray-600 font-normal">{path.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Selected Path Details */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${learningPaths[selectedPath].color} rounded-lg flex items-center justify-center`}>
                  {(() => {
                    const IconComponent = learningPaths[selectedPath].icon;
                    return <IconComponent className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-900 font-medium">{learningPaths[selectedPath].title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 font-normal">{learningPaths[selectedPath].description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Skill Industri yang Dipelajari:</h4>
                  <div className="flex flex-wrap gap-2">
                    {learningPaths[selectedPath].skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 border border-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Contoh Proyek:</h4>
                  <ul className="space-y-2">
                    {learningPaths[selectedPath].projects.map((project, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span className="font-normal">{project}</span>
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
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Program & Kegiatan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              Beragam kegiatan edukatif yang dirancang untuk mengembangkan kompetensi teknologi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 font-medium">{program.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 border-gray-300 text-gray-600">{program.frequency}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-normal">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Special Events */}
          <Card className="border-0 shadow-md bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-medium">Acara Khusus & Unggulan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-2">DevFest TelU Surabaya</h4>
                  <p className="text-blue-100 font-normal">Festival developer tahunan dengan pembicara nasional/internasional</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Solution Challenge</h4>
                  <p className="text-blue-100 font-normal">Partisipasi dalam kompetisi Google Solution Challenge</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Hackathon Internal</h4>
                  <p className="text-blue-100 font-normal">Kompetisi inovasi untuk mendorong kreativitas anggota</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Bergabung dengan Komunitas</h2>
            <p className="text-xl text-gray-600 mb-8 font-normal">
              Mulai perjalanan pembelajaran teknologi Google bersama kami
            </p>
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Siap untuk Memulai?</h3>
                  <p className="text-gray-600 mb-6 font-normal">
                    Daftarkan diri Anda untuk mendapatkan informasi terbaru tentang kegiatan, workshop, dan program pembelajaran kami.
                  </p>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="font-normal">gdg.campus.telkomsby@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="font-normal">Telkom University Surabaya</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to="/daftar">
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-medium border-0 shadow-sm"
                    >
                      Daftar Sekarang
                    </Button>
                  </Link>
                  <p className="text-xs text-gray-500 mt-3 font-normal">
                    Gratis untuk semua mahasiswa Telkom University Surabaya
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5_XhSNGzy4tRhASC3Di1soydMnv_UpLlcw&s" 
                alt="Google Logo" 
                className="w-8 h-8 filter brightness-0 invert" 
              />
              <span className="font-medium text-xl">GDG Campus TelU Surabaya</span>
            </div>
            <p className="text-gray-400 mb-6 font-normal">
              Google Developer Group Campus Telkom University Surabaya
            </p>
            <p className="text-gray-500 text-sm font-normal">
              © 2025 GDG Campus Telkom University Surabaya. Dibuat dengan ❤️ untuk komunitas teknologi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
