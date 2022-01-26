export class AwCarouselImgModel {
    
    imageUrl: string = "";
    title: string = "";
    description: string = "";

    constructor(title:string, description:string, url:string) {
        this.title = title;
        this.description = description;
        this.imageUrl = url
    }

}