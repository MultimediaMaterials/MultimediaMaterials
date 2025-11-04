const HtmlEmbedBlock = ({ html }) => (
  <div className="my-8" dangerouslySetInnerHTML={{ __html: html }} />
);
export default HtmlEmbedBlock;
