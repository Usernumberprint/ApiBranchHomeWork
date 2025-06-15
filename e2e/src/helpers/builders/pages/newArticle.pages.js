
export class NewArticle {

    constructor(page) {
        this.page = page;
        this.ArticleButton = page.getByRole('link', { name: 'New Article' });
        this.ArticleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.AboutArticle = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.WriteonArticle = page.getByRole('textbox', { name: 'Write your article (in' });
        this.Tags = page.getByRole('textbox', { name: 'Enter tags' });
        this.PublicationAtticleButton = page.getByRole('button', { name: 'Publish Article' });
    }

    async CreateArticle(randomuser) {
        
        await this.ArticleButton.click();
        await this.ArticleTitle.click();
        await this.ArticleTitle.fill("randomuser");
        await this.AboutArticle.click();
        await this.AboutArticle.fill('Рандомный текст');
        await this.WriteonArticle.click();
        await this.WriteonArticle.fill('О рандомном тексте');
        await this.Tags.click();
        await this.Tags.fill('ffffff!');
        await this.PublicationAtticleButton.click();

    }

}


