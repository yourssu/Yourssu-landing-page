import { IconProps } from '@/types/icon';

export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.71924 12.2805C7.71924 12.0111 7.61678 11.7416 7.41117 11.536L2.54099 6.6665L7.41117 1.79702C7.82169 1.38579 7.82169 0.719124 7.41117 0.307895C6.99994 -0.102632 6.33327 -0.102632 5.92204 0.307895L0.308001 5.92194C-0.102527 6.33317 -0.102527 6.99983 0.308001 7.41106L5.92204 13.0251C6.33327 13.4356 6.99994 13.4356 7.41117 13.0251C7.61678 12.8195 7.71924 12.55 7.71924 12.2805Z"
        fill="#25262C"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.2805C0 12.0111 0.102456 11.7416 0.308071 11.536L5.17825 6.6665L0.308071 1.79702C-0.102456 1.38579 -0.102456 0.719124 0.308071 0.307895C0.719299 -0.102632 1.38597 -0.102632 1.7972 0.307895L7.41124 5.92194C7.82176 6.33317 7.82176 6.99983 7.41124 7.41106L1.7972 13.0251C1.38597 13.4356 0.719299 13.4356 0.308071 13.0251C0.102456 12.8195 0 12.55 0 12.2805Z"
        fill="#25262C"
      />
    </svg>
  );
}
