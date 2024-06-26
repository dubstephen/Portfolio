interface Technology {
  id: string;
  title: string;
  imageSRC: string;
  link: string;
}

interface NavOption {
  title: string;
  link: string;
}

interface ClientCard {
  id: string;
  title: string;
  description: string;
  link?: string;
  technologies: string[];
}

interface ContactFormField {
  fieldName: string;
  label: string;
  placeholder: string;
  colStart: string;
  colEnd: string;
}

interface Contact {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
}