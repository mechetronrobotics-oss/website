export interface CertificateRecord {
  id: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  grade: string;
  center: string;
  issuer: string;
  accreditation: string;
  image: string;
}

export const certificatesDatabase: Record<string, CertificateRecord> = {
  "METSC-2026-0001": {
    id: "METSC-2026-0001",
    studentName: "B. Anitha",
    courseName: "S.T.E.M Robotics",
    issueDate: "June 30, 2026",
    grade: "Completed (1 Month Online)",
    center: "Online Training Portal",
    issuer: "Mech-E-Tron Robotics",
    accreditation: "AICRA Certified & MSME Registered",
    image: "/compressed/certificate1.webp",
  },
  "METSC-2026-0002": {
    id: "METSC-2026-0002",
    studentName: "Madanakanti Lohith Kumar",
    courseName: "S.T.E.M Robotics",
    issueDate: "June 30, 2026",
    grade: "Completed (1 Month Online)",
    center: "Online Training Portal",
    issuer: "Mech-E-Tron Robotics",
    accreditation: "AICRA Certified & MSME Registered",
    image: "/compressed/certificate2.webp",
  },
  "METSC-2026-0003": {
    id: "METSC-2026-0003",
    studentName: "Prabhav",
    courseName: "S.T.E.M Robotics",
    issueDate: "June 30, 2026",
    grade: "Completed (1 Month Online)",
    center: "Online Training Portal",
    issuer: "Mech-E-Tron Robotics",
    accreditation: "AICRA Certified & MSME Registered",
    image: "/compressed/certificate3.webp",
  },
  "METSC-2026-0004": {
    id: "METSC-2026-0004",
    studentName: "Vrushank",
    courseName: "S.T.E.M Robotics",
    issueDate: "June 30, 2026",
    grade: "Completed (1 Month Online)",
    center: "Online Training Portal",
    issuer: "Mech-E-Tron Robotics",
    accreditation: "AICRA Certified & MSME Registered",
    image: "/compressed/certificate4.webp",
  },
};

export function getCertificate(id: string): CertificateRecord | null {
  if (!id) return null;
  const formattedId = id.trim().toUpperCase();
  return certificatesDatabase[formattedId] || null;
}
