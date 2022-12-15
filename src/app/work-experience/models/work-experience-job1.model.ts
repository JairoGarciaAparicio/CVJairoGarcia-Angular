export class Job1 {
    public entity: string;
    public position: string;
    public from: Date;
    public to: Date;
    public name: string;
    public technology: string;
    public responsability: string;
    public imageUrl: string;

    constructor(entity: string, position: string, from: Date, to: Date, name: string, technology: string, responsability: string,  imageUrl: string) {
        this.entity = entity,
        this.position = position;
        this.from = from;
        this.to = from;
        this.name = name;
        this.technology = technology;
        this.responsability = responsability;
        this.imageUrl = imageUrl
    };
}