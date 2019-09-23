export class User {
  public id: String;
  public first_name: String;
  public last_name: String;
  public email: String;
  public gender: number;
  public user_type: number;
  public created_at: String;

  constructor(user){
    this.id = user.id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.gender = user.gender;
    this.user_type = user.user_type;
    this.created_at = user.created_at;
  }
}
