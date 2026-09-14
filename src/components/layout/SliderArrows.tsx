import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface ArrowProps {
  className?: string;
  currentSlide?: number;
  onClick?: () => void;
  slideCount?: number;
}

export function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <NavigateNextIcon />
    </div>
  );
}

export function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div className={className} onClick={onClick}>
      <NavigateBeforeIcon />
    </div>
  );
}
