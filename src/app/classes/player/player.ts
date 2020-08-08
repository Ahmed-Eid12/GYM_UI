export class Player {
  id: string;
  code: number;
  playerName: string;
  email: string;
  address: string;
  passportNumber: number;
  cardNumber: number;
  phone: number;
  modifiedBy: number;
  hulfMonthNo: number;
  playerImage: string;
  playerChampionships: string;
  amountPaid: number;
  amountRest: number;
  subscriptionNo: number;
  dateModify: Date;
  sysSubtype: {
    code: number;
    id: number;
    subtypeName: string;
  };

  sysExerciseType: {
    code: number;
    exerciseTypeName: string;
    id: number; 
  };

  sysGender: {
    code: number;
    gender: string;
    id: number;
  };

  weight: number;
  height: number;
  age: number;

  user: {
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    authorities: any;
    code: number;
    credentialsNonExpired: boolean;
    dateModify: string;
    email: string;
    enabled: boolean
    id: number
    isAdmin: number;
    modifiedBy: number;
    sysPrivelage: []
    userName: string;
    username: string;
}
}
