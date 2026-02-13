import Category from './Category.jsx';
export default function CategoryList(props) {
  const { categories } = props;

  /* ADIM 2: categorileri prop olarak alabilirsin */
  return (
    <>
      {categories.map((item, index) => (
        <Category category={item} key={index} />
      ))}
    </>
  );
}
