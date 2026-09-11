export const quickReplies = [
  "Electrical Design",
  "Power System Studies",
  "MEP Design",
  "Industries We Serve",
  "Book Consultation",
];

export function getBotResponse(message) {
  const text = message.toLowerCase().trim();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello \u{1F44B} Welcome to CoreAMP Engineering. I can help you with Electrical Design, Power System Studies, MEP Engineering and project consultation.";
  }

  if (
    text.includes("electrical") ||
    text.includes("electrical design")
  ) {
    return "Our Electrical Engineering capabilities include Power Distribution Design, Single Line Diagrams (SLD), Load Calculations, Equipment Sizing, Cable Sizing & Routing, Grounding & Bonding, and Lighting Design.";
  }

  if (
    text.includes("power system") ||
    text.includes("power studies") ||
    text.includes("studies")
  ) {
    return "Our Power System Studies include SKM Modeling, Load Flow Analysis, Short Circuit Analysis, Protective Device Coordination and Arc Flash Studies.";
  }

  if (
    text.includes("mep") ||
    text.includes("mechanical") ||
    text.includes("plumbing") ||
    text.includes("hvac")
  ) {
    return "CoreAMP provides coordinated MEP engineering covering Electrical, Mechanical / HVAC, Plumbing & Drainage, Fire & Life Safety, ELV / Low Current and Backup Power systems.";
  }

  if (
    text.includes("industry") ||
    text.includes("industries") ||
    text.includes("commercial") ||
    text.includes("healthcare") ||
    text.includes("residential") ||
    text.includes("education") ||
    text.includes("industrial") ||
    text.includes("mission critical")
  ) {
    return "We support Commercial, Education, Healthcare, Residential, Industrial and Mission-Critical projects.";
  }

  if (
    text.includes("load calculation") ||
    text.includes("load calculations")
  ) {
    return "We provide electrical load calculations, demand assessment and load schedules for commercial, industrial and building projects.";
  }

  if (
    text.includes("transformer") ||
    text.includes("ups") ||
    text.includes("generator") ||
    text.includes("equipment sizing")
  ) {
    return "Our equipment sizing services include engineering selection and sizing of transformers, UPS systems, generators and related electrical equipment.";
  }

  if (
    text.includes("short circuit") ||
    text.includes("fault")
  ) {
    return "Our Short Circuit Analysis evaluates fault-current levels and helps ensure electrical equipment and protection systems are correctly rated.";
  }

  if (text.includes("arc flash")) {
    return "We provide Arc Flash Studies to evaluate electrical hazards and support safer system operation and risk mitigation.";
  }

  if (text.includes("lighting")) {
    return "Our Lighting Design services cover indoor and outdoor lighting systems with focus on performance, safety and efficiency.";
  }

  if (
    text.includes("grounding") ||
    text.includes("earthing")
  ) {
    return "We provide grounding and bonding design based on applicable electrical engineering requirements and standards.";
  }

  if (
    text.includes("sld") ||
    text.includes("single line")
  ) {
    return "We develop Single Line Diagrams (SLD) for clear electrical system architecture, design development and technical review.";
  }

  if (
    text.includes("cable") ||
    text.includes("voltage drop")
  ) {
    return "Our cable engineering includes cable sizing, routing, voltage-drop calculations and ampacity considerations.";
  }

  if (
    text.includes("consult") ||
    text.includes("quote") ||
    text.includes("price") ||
    text.includes("contact") ||
    text.includes("project")
  ) {
    return "We'd be happy to discuss your project. You can book a consultation or contact the CoreAMP team through WhatsApp.";
  }

  return "I can help you with Electrical Design, Power System Studies, MEP Design, industry expertise and project consultation.";
}
