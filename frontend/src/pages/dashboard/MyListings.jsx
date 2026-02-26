 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyListings, deleteListing } from "../../services/listingService";
import ListingItem from "../../components/dashboard/ListingItem";

// Icons
import {
  CheckBadgeIcon,
  ClockIcon,
  XCircleIcon,
  ArrowTopRightOnSquareIcon,
  HomeModernIcon,
  PlusCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  LifebuoyIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

// --- Configuration ---
const PRIMARY_COLOR = "#144474";

// Status Config
const statusConfig = {
  approved: {
    color: "bg-green-100 text-green-700 border-green-200",
    icon: <CheckBadgeIcon className="w-3.5 h-3.5" />,
    label: "Approved",
  },
  rejected: {
    color: "bg-red-100 text-red-700 border-red-200",
    icon: <XCircleIcon className="w-3.5 h-3.5" />,
    label: "Rejected",
  },
  pending: {
    color: "bg-amber-100 text-amber-700 border-amber-200",
    icon: <ClockIcon className="w-3.5 h-3.5" />,
    label: "Pending",
  },
};

export default function MyListings() {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal States
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isRejectedModalOpen, setIsRejectedModalOpen] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState(null);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    try {
      setLoading(true);
      const data = await getMyListings();
      setListings(data);
    } catch (error) {
      console.error("Failed to load listings:", error);
    } finally {
      setLoading(false);
    }
  };

  // --- Delete Handlers ---
  const openDeleteModal = (id) => {
    setSelectedListingId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedListingId(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = async () => {
    if (selectedListingId) {
      await deleteListing(selectedListingId);
      closeDeleteModal();
      loadListings();
    }
  };

  // --- Rejected Appeal Handlers ---
  const openRejectedModal = (id) => {
    setSelectedListingId(id);
    setIsRejectedModalOpen(true);
  };

  const closeRejectedModal = () => {
    setIsRejectedModalOpen(false);
    setSelectedListingId(null);
  };

  const handleAppeal = () => {
    closeRejectedModal();
    navigate("/helpdesk");
  };

  // --- Navigation ---
  const handleOpen = (listing) => {
    if (listing.status === "approved") {
      navigate(`/listing/${listing.slug}`);
    }
  };

  // --- Components ---
  const StatusBadge = ({ status }) => {
    const current = statusConfig[status] || statusConfig.pending;
    return (
      <div
        className={`absolute top-3 left-3 z-20 flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide rounded-full border backdrop-blur-sm ${current.color}`}
      >
        {current.icon}
        <span className="ml-1">{current.label}</span>
      </div>
    );
  };

  const stats = {
    total: listings.length,
    approved: listings.filter((l) => l.status === "approved").length,
    pending: listings.filter((l) => l.status === "pending").length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* --- HEADER BANNER --- */}
        <header 
          className="relative overflow-hidden rounded-2xl shadow-xl p-6 sm:p-8 text-white"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                   <BuildingOffice2Icon className="w-6 h-6" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  My Properties
                </h1>
              </div>
              <p className="text-blue-100 mt-2 ml-1">
                Manage your real estate portfolio
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-sm font-medium">
                <span className="font-bold text-lg">{stats.total}</span> Total
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-400/30 text-sm font-medium text-green-100">
                <CheckBadgeIcon className="w-4 h-4 text-green-300"/>
                <span className="font-bold text-lg">{stats.approved}</span> Active
              </div>
              <div className="flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-400/30 text-sm font-medium text-amber-100">
                <ClockIcon className="w-4 h-4 text-amber-300"/>
                <span className="font-bold text-lg">{stats.pending}</span> Pending
              </div>
            </div>
          </div>
        </header>

        {/* --- LOADING & EMPTY STATES --- */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin"
                style={{ borderTopColor: PRIMARY_COLOR }}
              ></div>
            </div>
            <p className="mt-4 font-medium text-slate-500">Loading Portfolio...</p>
          </div>
        )}

        {!loading && listings.length === 0 && (
          <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
              <HomeModernIcon className="h-10 w-10 text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">No Listings Yet</h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
              Start building your portfolio by adding your first property listing today.
            </p>
            <div className="mt-8">
              <button
                onClick={() => navigate("/create-listing")}
                className="inline-flex items-center px-6 py-2.5 text-white text-sm font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Create First Listing
              </button>
            </div>
          </div>
        )}

        {/* --- GRID --- */}
        {!loading && listings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((item) => {
              const isApproved = item.status === "approved";
              const isRejected = item.status === "rejected";

              return (
                <div
                  key={item._id}
                  className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Card Header Section */}
                  <div 
                    className="relative h-28 bg-[#144474]"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>

                    <StatusBadge status={item.status} />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent pt-12">
                       <h3 className="text-white font-bold text-lg truncate">{item.title || "Untitled Property"}</h3>
                       <p className="text-white/80 text-xs mt-0.5">{item.location || "Location not set"}</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-5">
                    <div className="flex-grow mb-5">
                       <ListingItem listing={item} />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      {/* Delete Button */}
                      <button
                        onClick={() => openDeleteModal(item._id)}
                        className="flex-1 py-2.5 px-3 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors border border-transparent hover:border-red-200"
                      >
                        Delete
                      </button>

                      {/* Conditional Action Button */}
                      {isApproved && (
                        <button
                          onClick={() => handleOpen(item)}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-white text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          View Live
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        </button>
                      )}

                      {isRejected && (
                        <button
                          onClick={() => openRejectedModal(item._id)}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-white text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-md bg-red-500 hover:bg-red-600"
                        >
                          Appeal
                          <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                        </button>
                      )}

                      {!isApproved && !isRejected && (
                        <button
                          disabled
                          className="flex-1 py-2.5 px-3 text-sm font-semibold text-slate-500 bg-slate-100 rounded-lg cursor-not-allowed"
                        >
                          In Review
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* --- DELETE MODAL --- */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-scaleIn">
            <div className="p-6 text-center border-b border-slate-100">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4">
                <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Delete Property</h3>
              <p className="text-sm text-slate-500 mt-2">
                This will permanently remove the listing. You cannot undo this action.
              </p>
            </div>
            <div className="flex gap-3 p-5 bg-slate-50">
              <button
                onClick={closeDeleteModal}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-sm"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- REJECTED APPEAL MODAL --- */}
      {isRejectedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-scaleIn">
            
            <div className="p-6 text-center border-b border-slate-100">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                <LifebuoyIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Listing Rejected</h3>
              <p className="text-sm text-slate-500 mt-2">
                If you believe your listing was rejected mistakenly or you want to appeal this decision, please contact our support team.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-5 bg-slate-50">
              <button
                onClick={handleAppeal}
                className="w-full px-4 py-2.5 text-sm font-medium text-white rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                Contact Support / Appeal
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </button>
              <button
                onClick={closeRejectedModal}
                className="w-full px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}