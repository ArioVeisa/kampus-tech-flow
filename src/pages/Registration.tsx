
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Code, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nim: "",
    semester: "",
    major: "",
    learningPath: "",
    motivation: "",
    experience: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const learningPaths = [
    { id: "cybersecurity", name: "Cybersecurity", color: "bg-[#DB4437]" },
    { id: "mobile", name: "Mobile Development", color: "bg-[#0F9D58]" },
    { id: "web", name: "Web Development", color: "bg-[#4285F4]" },
    { id: "ai", name: "AI & Machine Learning", color: "bg-[#F4B400]" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-[#0F9D58]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#0F9D58]" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Pendaftaran Berhasil!</h2>
            <p className="text-slate-600 mb-6">
              Terima kasih telah bergabung dengan GDG Campus TelU Surabaya. Kami akan menghubungi Anda melalui email dalam 1-2 hari kerja.
            </p>
            <div className="space-y-2 text-sm text-slate-500 mb-8">
              <p>✓ Konfirmasi pendaftaran akan dikirim ke email Anda</p>
              <p>✓ Informasi kegiatan dan workshop akan diupdate secara berkala</p>
              <p>✓ Bergabunglah dengan komunitas Discord kami</p>
            </div>
            <Button 
              className="bg-[#4285F4] hover:bg-[#3367D6] text-white"
              onClick={() => navigate('/')}
            >
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-slate-600 hover:text-[#4285F4]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
            <div className="flex items-center space-x-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5_XhSNGzy4tRhASC3Di1soydMnv_UpLlcw&s" 
                alt="Google Logo" 
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-slate-800">GDG Campus TelU - Pendaftaran</span>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#4285F4] text-white hover:bg-[#3367D6]">
            Formulir Pendaftaran
          </Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Bergabung dengan 
            <span className="bg-gradient-to-r from-[#4285F4] to-[#0F9D58] bg-clip-text text-transparent block">
              GDG Campus TelU Surabaya
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mulai perjalanan pembelajaran teknologi Google Anda bersama komunitas yang supportif dan inovatif
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Informasi Pendaftaran</CardTitle>
            <CardDescription>
              Lengkapi data diri Anda untuk bergabung dengan komunitas GDG Campus TelU Surabaya
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                  Data Pribadi
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-[#4285F4]" />
                      <span>Nama Lengkap *</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4]"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#4285F4]" />
                      <span>Email *</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4]"
                      placeholder="nama@student.telkomuniversity.ac.id"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#4285F4]" />
                      <span>Nomor Telepon *</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4]"
                      placeholder="08xxxxxxxxx"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nim" className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-[#4285F4]" />
                      <span>NIM *</span>
                    </Label>
                    <Input
                      id="nim"
                      name="nim"
                      type="text"
                      required
                      value={formData.nim}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4]"
                      placeholder="1234567890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="semester">Semester Saat Ini *</Label>
                    <select
                      id="semester"
                      name="semester"
                      required
                      value={formData.semester}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 text-sm border border-slate-300 rounded-md focus:border-[#4285F4] focus:ring-[#4285F4] focus:ring-1"
                    >
                      <option value="">Pilih Semester</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                      <option value="5">Semester 5</option>
                      <option value="6">Semester 6</option>
                      <option value="7">Semester 7</option>
                      <option value="8">Semester 8</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="major">Program Studi *</Label>
                    <Input
                      id="major"
                      name="major"
                      type="text"
                      required
                      value={formData.major}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4]"
                      placeholder="Contoh: Teknik Informatika"
                    />
                  </div>
                </div>
              </div>

              {/* Learning Path Selection */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                  Pilihan Learning Path
                </h3>
                
                <div>
                  <Label className="flex items-center space-x-2 mb-4">
                    <Code className="w-4 h-4 text-[#4285F4]" />
                    <span>Learning Path yang Diminati *</span>
                  </Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {learningPaths.map((path) => (
                      <div key={path.id} className="relative">
                        <input
                          type="radio"
                          id={path.id}
                          name="learningPath"
                          value={path.id}
                          checked={formData.learningPath === path.id}
                          onChange={handleInputChange}
                          className="sr-only"
                          required
                        />
                        <label
                          htmlFor={path.id}
                          className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.learningPath === path.id
                              ? 'border-[#4285F4] bg-[#4285F4]/5'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 ${path.color} rounded-full`}></div>
                            <span className="font-medium text-slate-800">{path.name}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                  Informasi Tambahan
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="motivation">Motivasi Bergabung *</Label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4] min-h-[100px]"
                      placeholder="Ceritakan motivasi Anda bergabung dengan GDG Campus TelU Surabaya..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Pengalaman Teknologi (Opsional)</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-[#4285F4] focus:ring-[#4285F4] min-h-[80px]"
                      placeholder="Deskripsikan pengalaman atau proyek teknologi yang pernah Anda kerjakan (jika ada)..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-slate-200">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#4285F4] to-[#0F9D58] hover:from-[#3367D6] hover:to-[#0D8043] text-white py-4 text-lg font-semibold"
                >
                  Daftar Sekarang
                </Button>
                <p className="text-sm text-slate-500 mt-3 text-center">
                  Dengan mendaftar, Anda menyetujui untuk menerima komunikasi dari GDG Campus TelU Surabaya
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
