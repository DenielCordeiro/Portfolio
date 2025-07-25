export class ProjectModel {

  constructor(
    public id?: number,
    public name?: string,
    public subtitle?: string,
    public description?: string,
    public image?: string,
    public github?: string,
    public page?: string,
    public typescript?: boolean,
    public javascript?: boolean,
    public html?: boolean,
    public sass?: boolean,
  ) {}
}
