export interface FormData {
  type: 'individual' | 'team';
  name: string;
  teamSize?: number;
  school: string;
  phone: string;
  period: '1' | '2' | '';
  accommodation: boolean;
  gender?: 'male' | 'female' | '';
}

export interface EnrollFormProps {
  onClose: () => void;
  isOpen: boolean;
}
