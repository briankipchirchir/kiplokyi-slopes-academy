import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
       backgroundImage: `
  linear-gradient(
    to right,
    rgba(15, 23, 42, 0.55),
    rgba(15, 23, 42, 0.25)
  ),
  url('/images/school-hero.jpg')
`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} maxWidth="600px">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Empowering Students for a Brighter Future
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(248, 250, 252, 0.85)",
              fontWeight: 400,
            }}
          >
            Excellence in education, leadership, and character development
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: "#2563eb",
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              Apply Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/about"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                color: "#f8fafc",
                borderColor: "rgba(248, 250, 252, 0.6)",
                "&:hover": {
                  borderColor: "#f8fafc",
                  backgroundColor: "rgba(248, 250, 252, 0.08)",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

