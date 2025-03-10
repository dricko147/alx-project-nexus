import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/src/store";
import { fetchJobs, fetchLocations, setFilters, applyFilters } from "@/src/store/slices/jobSlice";
import Card from "@/components/commons/Card";
import { SAMPLEIMAGES } from "@/constants";

const JobList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { jobs, status, error, locations, experienceLevels, filters } = useSelector((state: RootState) => state.jobs);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchLocations());
  }, [dispatch]);

  // Handle location filter change
  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilters({ location: event.target.value }));
    dispatch(applyFilters());
    setCurrentPage(1);
  };

  // Handle experience level filter change
  const handleExperienceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilters({ experience_level: event.target.value }));
    dispatch(applyFilters());
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery) ||
    job.company.toLowerCase().includes(searchQuery) ||
    job.location.toLowerCase().includes(searchQuery)
  );

  // Calculate pagination indexes
  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = filteredJobs.slice(firstJobIndex, lastJobIndex);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="job-list">
      <h1>Job Listings</h1>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Filters Section */}
      <div className="filter-container">
        {/* Location Filter */}
        <div>
          <label htmlFor="location">Filter by Location:</label>
          <select id="location" value={filters.location || ""} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level Filter */}
        <div>
          <label htmlFor="experience">Filter by Experience Level:</label>
          <select id="experience" value={filters.experience_level || ""} onChange={handleExperienceChange}>
            <option value="">All Levels</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === "loading" && <p>Loading jobs...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      {/* Job Cards */}
      <div className="grid-container">
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => {
            const logo = SAMPLEIMAGES[index % SAMPLEIMAGES.length];
            return <Card key={job.id} job={job} logo={logo} />;
          })
        ) : (
          <p>No jobs found</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          <i className="fi fi-rr-arrow-left"></i>
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber + 1)}
            className={currentPage === pageNumber + 1 ? "active" : ""}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          <i className="fi fi-rr-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default JobList;