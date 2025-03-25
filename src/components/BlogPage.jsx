import { useParams } from "react-router-dom";

const blogContent = {
  "sustainable-textiles": {
    title: "Sustainable Textiles: Paving the Way for a Greener Future",
    content: `
      In an era where environmental responsibility is paramount, the textile industry is undergoing a transformative shift toward sustainability. 
      Eco-friendly practices are no longer just a passing trend but a necessity that drives innovation and quality in production. 
      Companies are now investing in biodegradable materials, energy-efficient production techniques, and water-saving dyeing processes to 
      reduce their carbon footprint and promote a greener future.
      
      As consumers demand transparency and ethical practices, businesses that embrace sustainability not only contribute to a better world 
      but also gain a competitive edge in the global market.
    `,
  },
  "quality-assurance": {
    title: "Quality Assurance: Ensuring Excellence in Every Thread",
    content: `
      Quality is the cornerstone of every successful textile export, representing a commitment to excellence and reliability that customers worldwide depend on. 
      As global markets become increasingly competitive, maintaining stringent quality standards is essential for building trust and credibility.
      
      Advanced testing procedures, precision in material selection, and adherence to international quality certifications ensure that every fabric meets the 
      highest benchmarks. Companies that prioritize quality assurance are better positioned to thrive in the competitive textile industry.
    `,
  },
  "textile-innovations": {
    title: "Innovations in Textile Manufacturing: Technology Transforming Tradition",
    content: `
      The textile industry, deeply rooted in tradition, is now being redefined by groundbreaking technological innovations that blend heritage with modern efficiency. 
      From state-of-the-art machinery to digital design tools, technology is revolutionizing every step of the manufacturing process.
      
      Automation, AI-driven quality control, and 3D weaving techniques are pushing the boundaries of textile production, allowing for greater customization, 
      precision, and sustainability. These advancements are shaping the future of the industry and setting new standards for excellence.
    `,
  },
};

const BlogPage = () => {
  const { blogId } = useParams();
  const blog = blogContent[blogId];

  if (!blog) {
    return <h2 className="text-center text-2xl font-bold mt-10">Blog not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogPage;
