
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, User, Mail, Phone, BookOpen, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    nim: "",
    email: "",
    phone: "",
    jurusan: "",
    semester: "",
    learningPath: "",
    motivation: "",
    experience: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Terima kasih telah mendaftar. Kami akan menghubungi Anda segera.",
    });

    // Reset form
    setFormData({
      fullName: "",
      nim: "",
      email: "",
      phone: "",
      jurusan: "",
      semester: "",
      learningPath: "",
      motivation: "",
      experience: ""
    });
  };

  const learningPaths = [
    { value: "cybersecurity", label: "Cybersecurity", color: "text-red-600" },
    { value: "mobile", label: "Mobile Development", color: "text-green-600" },
    { value: "web", label: "Web Development", color: "text-blue-600" },
    { value: "ai", label: "AI & Machine Learning", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-goog/contentbuilder/logo_dark_QmPdj9K.svg" 
              alt="GDG Logo" 
              className="w-10 h-10" 
            />
            <h1 className="text-3xl font-normal text-gray-900">Daftar GDG Campus TelU</h1>
          </div>
          <p className="text-lg text-gray-600 font-normal">
            Bergabunglah dengan komunitas teknologi Google terdepan di Telkom University Surabaya
          </p>
        </div>

        {/* Registration Form */}
        <Card className="border-0 shadow-md bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-gray-900 text-center">Form Pendaftaran</CardTitle>
            <Badge className="mx-auto bg-blue-50 text-blue-700 border border-blue-200">
              Gratis untuk semua mahasiswa TelU Surabaya
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Informasi Pribadi
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Nama Lengkap *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="nim">NIM *</Label>
                    <Input
                      id="nim"
                      name="nim"
                      value={formData.nim}
                      onChange={handleInputChange}
                      placeholder="Contoh: 1301204XXX"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email TelU *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@student.telkomuniversity.ac.id"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Informasi Akademik
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jurusan">Jurusan/Program Studi *</Label>
                    <select
                      id="jurusan"
                      name="jurusan"
                      value={formData.jurusan}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Pilih Jurusan</option>
                      <option value="informatika">Informatika</option>
                      <option value="sistem-informasi">Sistem Informasi</option>
                      <option value="teknik-komputer">Teknik Komputer</option>
                      <option value="data-science">Data Science</option>
                      <option value="cyber-security">Cyber Security</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="semester">Semester Saat Ini *</Label>
                    <select
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                </div>
              </div>

              {/* Learning Path Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Learning Path yang Diminati
                </h3>
                
                <div>
                  <Label htmlFor="learningPath">Pilih Learning Path *</Label>
                  <select
                    id="learningPath"
                    name="learningPath"
                    value={formData.learningPath}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih Learning Path</option>
                    {learningPaths.map((path) => (
                      <option key={path.value} value={path.value}>
                        {path.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Anda bisa mengikuti learning path lain setelah bergabung
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Informasi Tambahan</h3>
                
                <div>
                  <Label htmlFor="motivation">Motivasi Bergabung *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Ceritakan mengapa Anda ingin bergabung dengan GDG Campus TelU..."
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Pengalaman Teknologi (Opsional)</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Ceritakan pengalaman Anda di bidang teknologi, programming, atau proyek yang pernah dikerjakan..."
                    className="mt-1 min-h-[80px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium rounded-md"
                  size="lg"
                >
                  Daftar Sekarang
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Dengan mendaftar, Anda setuju untuk mematuhi kode etik dan aturan komunitas GDG
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="border-0 shadow-sm bg-white rounded-lg">
            <CardContent className="p-6">
              <h3 className="font-medium text-gray-900 mb-2">Apa yang Anda Dapatkan?</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Akses ke semua learning path dan workshop</li>
                <li>• Sertifikat partisipasi kegiatan</li>
                <li>• Networking dengan industri dan alumni</li>
                <li>• Peluang magang dan kerja sama proyek</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white rounded-lg">
            <CardContent className="p-6">
              <h3 className="font-medium text-gray-900 mb-2">Langkah Selanjutnya</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Konfirmasi pendaftaran via email</li>
                <li>• Undangan ke grup WhatsApp komunitas</li>
                <li>• Orientasi anggota baru</li>
                <li>• Mulai mengikuti kegiatan pertama</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Registration;
