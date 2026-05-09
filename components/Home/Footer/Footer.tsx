import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="border-t bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-700 py-12">
      <div className="w-[80%] mx-auto">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with{" "}
          <Heart className="w-4 h-4 text-destructive fill-destructive" />
          by Raina Disa Wibowo
        </p>
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-800 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rigth reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
