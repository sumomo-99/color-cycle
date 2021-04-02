import {
  Form, 
} from 'semantic-ui-react'

export default function ColorCode(props) {
  const handleChange = (rgb, value) => {
    props.setRGB(rgb, parseInt(value, 10))
  }
  
  return (
    <Form>
      <Form.Input
        inline
        label="R"
        type="range"
        min="0"
        max="255"
        value={parseInt(props.r, 16)}
        onChange={e => handleChange('r', e.target.value)}
        />
      <Form.Input
        inline
        label="G"
        type="range"
        min="0"
        max="255"
        value={parseInt(props.g, 16)}
        onChange={e => handleChange('g', e.target.value)}
        />
      <Form.Input
        inline
        label="B"
        type="range"
        min="0"
        max="255"
        value={parseInt(props.b, 16)}
        onChange={e => handleChange('b', e.target.value)}
      />
    </Form>
  )
}