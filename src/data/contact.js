export const COREAMP_CONTACT = Object.freeze({
  whatsappNumber: "918951262696",
  phoneDisplay: "+91 89512 62696",
  phoneHref: "+918951262696",
  email: "hello@coreamp.in",
  office: "Bengaluru, Karnataka, India",
});

export const CONTACT_SERVICES = Object.freeze([
  "Electrical Design",
  "Power System Studies",
  "MEP Design & Coordination",
  "Engineering Review",
]);

const clean = (value) => String(value ?? "").trim();

export function createWhatsAppLeadLink({
  source = "CoreAMP website",
  name,
  company,
  phone,
  email,
  service,
  requirement,
  timeline,
  details,
} = {}) {
  const fields = [
    ["Source", source],
    ["Name", name],
    ["Company", company],
    ["Phone", phone],
    ["Email", email],
    ["Service", service],
    ["Requirement", requirement],
    ["Timeline", timeline],
    ["Project brief", details],
  ]
    .map(([label, value]) => [label, clean(value)])
    .filter(([, value]) => value);

  const message = [
    "Hello CoreAMP Engineering,",
    "",
    "I would like to discuss an engineering project.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  return `https://wa.me/${COREAMP_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}
