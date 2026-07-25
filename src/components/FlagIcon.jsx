export default function FlagIcon({ code, className = '', style }) {
  if (!code) return null
  return <span className={`fi fi-${code} flag-icon ${className}`} style={style} aria-hidden="true" />
}
