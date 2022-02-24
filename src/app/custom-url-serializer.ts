import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
export class CustomUrlSerializer implements UrlSerializer {
    private defaultUrlSerializer: DefaultUrlSerializer = new DefaultUrlSerializer();

    parse(url: string): UrlTree {
        url = url.replace(/\%/g, '%25');
        return this.defaultUrlSerializer.parse(url);
    }

    serialize(tree: UrlTree): string {
        return this.defaultUrlSerializer.serialize(tree).replace(/%25/g, '%');
    }
}
