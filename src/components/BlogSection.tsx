const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary uppercase tracking-[4px] text-sm">
          Insights & Updates
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Our <span className="text-primary">Blog</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Stay updated with our latest projects, branding ideas, and creative ideas.
        </p>

        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-16">
          <h3 className="text-3xl font-semibold mb-4">Coming Soon 🚀</h3>
          <p className="text-muted-foreground">
            We’re working on exciting updates, insights, and industry tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;