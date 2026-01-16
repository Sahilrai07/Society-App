
export type UserRole = 'resident' | 'admin' | 'guard';

export interface SocietyMember {
  id: string;
  name: string;
  flat: string;
  role: 'owner' | 'tenant';
  isCommittee?: boolean;
  isDefaulter?: boolean;
  phone: string;
  email?: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Urgent' | 'Event' | 'Maintenance' | 'General';
  isUnread?: boolean;
}

export interface Bill {
  id: string;
  month: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending';
  breakdown?: { label: string; value: number }[];
}

export interface VisitorEntry {
  id: string;
  name: string;
  type: 'Delivery' | 'Guest' | 'Service' | 'Cab';
  provider?: string;
  flat: string;
  time: string;
  status: 'Approved' | 'Pending' | 'Denied';
  actionTaken?: 'Entry' | 'Exit';
}

export interface Complaint {
  id: string;
  title: string;
  category: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
  description: string;
  updates?: number;
}

export interface MarketplaceItem {
  id: string;
  title: string;
  price: string;
  image: string;
  seller: string;
  category: string;
}

export interface Vehicle {
  id: string;
  number: string;
  model: string;
  type: 'Car' | 'Bike';
  status: 'Inside' | 'Outside';
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  phone: string;
  image: string;
  isAvailable: boolean;
}
