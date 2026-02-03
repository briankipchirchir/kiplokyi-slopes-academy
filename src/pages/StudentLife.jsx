import FilteredActivitiesGallery from "../components/FilteredActivitiesGallery";
import { Box, Typography, Container } from "@mui/material";

export default function StudentLife() {
  return (
    <Box>
      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#F9FAFB" }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Student Life at Greenfield Academy
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Explore music, drama, tours, contests, and more. Students enjoy a rich and balanced experience.
          </Typography>
        </Container>
      </Box>

      {/* Filtered Activities Gallery */}
      <FilteredActivitiesGallery />
    </Box>
  );
}
