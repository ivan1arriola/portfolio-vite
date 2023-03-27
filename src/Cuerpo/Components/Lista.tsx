interface ListaProps {
    items: string[];
  }
  
  const Lista = ({ items }: ListaProps) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default Lista;
  