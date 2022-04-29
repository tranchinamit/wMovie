import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
export function SectionTitle(props: TextProps) {
  return <Text {...props} style={[props.style, {
    margin: 16,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sansation',
  }]} />;
}